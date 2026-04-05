"use client";

import React, { useState, useEffect, useImperativeHandle, forwardRef } from "react"; // 1. add useImperativeHandle, forwardRef
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Box, Card, Flex, Heading, Text, TextField,
  Select, Checkbox, Button, Grid, Tabs
} from "@radix-ui/themes";
import {
  HiOutlineChevronRight,
  HiOutlineChevronLeft
} from "react-icons/hi";
import { RiWhatsappFill } from "react-icons/ri";

export interface BuyerRequestFormRef {
  reset: () => void;
}

const formSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  age: z.string()
    .min(1, "Usia wajib diisi")
    .regex(/^\d+$/, "Usia harus berupa angka"),
  jobType: z.string().min(1, "Pilih jenis pekerjaan"),
  phone: z.string().min(10, "No HP minimal 10 digit"),
  location: z.string().min(3, "Lokasi minimal 3 karakter"),
  budget: z.string().min(1, "Pilih budget"),
  propertyType: z.string().min(1, "Pilih tipe properti"),
  certificate: z.string().min(1, "Pilih legalitas"),
  certificate_other: z.string(),
  purpose: z.string().min(1, "Pilih tujuan pembelian"),
  payment: z.string().min(1, "Pilih metode pembayaran"),
  urgency: z.string().min(1, "Pilih timeline pembelian"),
  bedroom: z.string().optional(),
  bathroom: z.string().optional(),
  building: z.string().optional(),
  land: z.string().optional(),
  electricity: z.string().optional(),
  water: z.string().optional(),
  carport: z.boolean().optional(),
  carport_count: z.string().optional(),
  notes: z.string().optional(),
  security: z.boolean().optional(),
  one_gate: z.boolean().optional(),
  masjid: z.boolean().optional(),
  sekolah: z.boolean().optional(),
  minimart: z.boolean().optional(),
});

type FormData = z.infer<typeof formSchema>;

const TABS = ["buyer", "property", "detail", "lingkungan"];

const BuyerRequestForm = forwardRef<BuyerRequestFormRef>(function BuyerRequestForm(_, ref) {
  const [isClient, setIsClient] = useState(false);
  const [activeTab, setActiveTab] = useState("buyer");
  const [unlockedTabs, setUnlockedTabs] = useState<string[]>(["buyer"]);


  useEffect(() => setIsClient(true), []);

  const {
    register,
    handleSubmit,
    control,
    watch,
    trigger,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      water: "pdam",
      electricity: "1300",
    },
  });

  useImperativeHandle(ref, () => ({
    reset: () => {
      reset();
      setActiveTab("buyer");
      setUnlockedTabs(["buyer"]);
    },
  }));

  const hasCarport = watch("carport");

  const handleNext = async () => {
    const fields: Record<string, (keyof FormData)[]> = {
      buyer: ["name", "age", "jobType", "phone", "location"],
      property: ["budget", "propertyType", "certificate", "purpose", "payment", "urgency"],
      detail: [],
      environment: [],
    };

    const valid = await trigger(fields[activeTab] ?? []);
    if (valid) {
      const idx = TABS.indexOf(activeTab);
      if (idx < TABS.length - 1) {
        const nextTab = TABS[idx + 1];
        setUnlockedTabs((prev) =>
          prev.includes(nextTab) ? prev : [...prev, nextTab]
        );
        setActiveTab(nextTab);
      }
    }
  };

  const handlePrev = () => {
    const idx = TABS.indexOf(activeTab);
    if (idx > 0) setActiveTab(TABS[idx - 1]);
  };

  const onSubmit = (data: FormData) => {
    const message = `*🔥 Inquiry Properti Baru*

      👤 *Nama:* ${data.name}
      📞 *HP:* ${data.phone}
      📍 *Lokasi:* ${data.location}

      🏠 *Properti:*
      - Tipe: ${data.propertyType}
      - Legalitas: ${data.certificate}${data.certificate === "lainnya" ? ` (${data.certificate_other})` : ""}
      - Budget: ${data.budget}

      🎯 *Rencana:*
      - Tujuan: ${data.purpose}
      - Pembayaran: ${data.payment}
      - Timeline: ${data.urgency}

      📐 *Spesifikasi:*
      - Kamar Tidur: ${data.bedroom || "-"}
      - Kamar Mandi: ${data.bathroom || "-"}
      - Luas Bangunan: ${data.building ? `${data.building} m²` : "-"}
      - Luas Tanah: ${data.land ? `${data.land} m²` : "-"}
      - Listrik: ${data.electricity ? `${data.electricity} VA` : "-"}
      - Air: ${data.water || "-"}
      - Carport: ${data.carport ? `Ya (${data.carport_count || "1"} mobil)` : "Tidak"}

      🏘️ *Fasilitas Lingkungan:*
      - Keamanan 24 Jam: ${data.security ? "✅" : "❌"}
      - One Gate System: ${data.one_gate ? "✅" : "❌"}
      - Masjid: ${data.masjid ? "✅" : "❌"}
      - Sekolah: ${data.sekolah ? "✅" : "❌"}
      - Minimart: ${data.minimart ? "✅" : "❌"}

      📝 *Catatan:* ${data.notes || "-"}
    `;

    window.open(
      `https://wa.me/6281575735788?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  if (!isClient) return null;

  const FieldError = ({ message }: { message?: string }) => message
    ? <Text size="1" color="red">{message}</Text>
    : null;

  return (
    <Box className="w-full overflow-hidden">
      <Card size={{ initial: "2", sm: "4" }} className="overflow-hidden">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
            
            <Tabs.List className="mb-6 w-full">
              {TABS.map((tab) => {
                const isUnlocked = unlockedTabs.includes(tab);
                return (
                  <Tabs.Trigger
                    key={tab}
                    value={tab}
                    className="flex-1"
                    disabled={!isUnlocked}
                    onClick={(e) => {
                      if (!isUnlocked) e.preventDefault();
                    }}
                  >
                    <Text
                      className="capitalize"
                      weight={"medium"}
                      size={"1"}
                      style={{ opacity: isUnlocked ? 1 : 0.35 }}
                    >
                      {tab}
                    </Text>
                  </Tabs.Trigger>
                );
              })}
            </Tabs.List>

            <Flex align={"start"} direction={"column"} gap={"4"}>
              <Text size="1" className="text-center text-slate-500">
                Step {TABS.indexOf(activeTab) + 1} dari {TABS.length}
              </Text>

              <Tabs.Content value="buyer" className="w-full">
                <Grid columns={{ sm: "2" }} gap="4">
                  <Flex direction="column" gap="1">
                    <TextField.Root placeholder="Nama" {...register("name")} />
                    <FieldError message={errors.name?.message} />
                  </Flex>

                  <Flex direction="column" gap="1">
                    <TextField.Root placeholder="No HP" {...register("phone")} />
                    <FieldError message={errors.phone?.message} />
                  </Flex>

                  <Flex direction="column" gap="1">
                    <TextField.Root placeholder="Usia" type="number" {...register("age")} />
                    <FieldError message={errors.age?.message} />
                  </Flex>

                  <Flex direction="column" gap="1">
                    <Controller
                      name="jobType"
                      control={control}
                      render={({ field }) => (
                        <Select.Root value={field.value} onValueChange={field.onChange}>
                          <Select.Trigger placeholder="Pilih pekerjaan" className="w-full" />
                          <Select.Content>
                            {["Karyawan Swasta","PNS / ASN","TNI / Polri","Wirausaha / Pengusaha","Profesional (Dokter, Pengacara, dll)","Freelancer","Ibu Rumah Tangga","Mahasiswa / Pelajar","Pensiunan","Lainnya"].map((item) => (
                              <Select.Item key={item} value={item}>{item}</Select.Item>
                            ))}
                          </Select.Content>
                        </Select.Root>
                      )}
                    />
                    <FieldError message={errors.jobType?.message} />
                  </Flex>

                  <Flex direction="column" gap="1">
                    <TextField.Root placeholder="Lokasi (Semarang, dll)" {...register("location")} />
                    <FieldError message={errors.location?.message} />
                  </Flex>
                </Grid>
              </Tabs.Content>

              <Tabs.Content value="property" className="w-full">
                <Flex width={"100%"} direction="column" gap="4">
                  <Grid columns={{ initial: "1", sm: "2" }} gap="4">

                    <Flex direction={"column"} gap={"1"}>
                      <Heading size="2" weight="medium">Budget</Heading>
                      <Controller
                        name="budget"
                        control={control}
                        render={({ field }) => (
                          <Select.Root value={field.value} onValueChange={field.onChange}>
                            <Select.Trigger placeholder="Pilih budget" className="w-full" />
                            <Select.Content>
                              {["< 200 Juta","200 - 500 Juta","500 Juta - 1 Miliar","1 - 2 Miliar","2 - 5 Miliar","> 5 Miliar"].map((item) => (
                                <Select.Item key={item} value={item}>{item}</Select.Item>
                              ))}
                            </Select.Content>
                          </Select.Root>
                        )}
                      />
                      <FieldError message={errors.budget?.message} />
                    </Flex>

                    <Flex direction={"column"} gap={"1"}>
                      <Heading size="2" weight="medium">Tipe Properti</Heading>
                      <Controller
                        name="propertyType"
                        control={control}
                        render={({ field }) => (
                          <Select.Root value={field.value} onValueChange={field.onChange}>
                            <Select.Trigger placeholder="Pilih tipe properti" className="w-full" />
                            <Select.Content>
                              {["Rumah Tinggal","Rumah Cluster","Rumah Subsidi","Apartemen / Condo","Tanah Kavling","Tanah Komersial","Ruko","Rukan","Gudang","Kantor","Villa","Kos / Guest House"].map((item) => (
                                <Select.Item key={item.toLowerCase()} value={item}>{item}</Select.Item>
                              ))}
                            </Select.Content>
                          </Select.Root>
                        )}
                      />
                      <FieldError message={errors.propertyType?.message} />
                    </Flex>

                    <Flex direction={"column"} gap={"1"}>
                      <Heading size="2" weight="medium">Legalitas</Heading>
                      <Controller
                        name="certificate"
                        control={control}
                        render={({ field }) => (
                          <Select.Root value={field.value} onValueChange={field.onChange}>
                            <Select.Trigger placeholder="Pilih legalitas" className="w-full" />
                            <Select.Content>
                              {["SHM (Milik)","SHGB","Girik","AJB","Letter C","Strata Title","Lainnya"].map((item) => (
                                <Select.Item key={item} value={item.toLowerCase()}>{item}</Select.Item>
                              ))}
                            </Select.Content>
                          </Select.Root>
                        )}
                      />
                      <FieldError message={errors.certificate?.message} />
                    </Flex>

                    <Flex direction={"column"} gap={"1"}>
                      <Heading size="2" weight="medium">Tujuan Pembelian</Heading>
                      <Controller
                        name="purpose"
                        control={control}
                        render={({ field }) => (
                          <Select.Root value={field.value} onValueChange={field.onChange}>
                            <Select.Trigger placeholder="Pilih tujuan" className="w-full" />
                            <Select.Content>
                              {["Hunian Pribadi","Investasi","Disewakan","Usaha / Komersial"].map((item) => (
                                <Select.Item key={item} value={item}>{item}</Select.Item>
                              ))}
                            </Select.Content>
                          </Select.Root>
                        )}
                      />
                      <FieldError message={errors.purpose?.message} />
                    </Flex>

                    <Flex direction={"column"} gap={"1"}>
                      <Heading size="2" weight="medium">Metode Pembayaran</Heading>
                      <Controller
                        name="payment"
                        control={control}
                        render={({ field }) => (
                          <Select.Root value={field.value} onValueChange={field.onChange}>
                            <Select.Trigger placeholder="Pilih metode" className="w-full" />
                            <Select.Content>
                              {["Cash Keras","KPR Bank","KPR Subsidi (FLPP)","Cash Bertahap"].map((item) => (
                                <Select.Item key={item} value={item}>{item}</Select.Item>
                              ))}
                            </Select.Content>
                          </Select.Root>
                        )}
                      />
                      <FieldError message={errors.payment?.message} />
                    </Flex>

                    <Flex direction={"column"} gap={"1"}>
                      <Heading size="2" weight="medium">Timeline Pembelian</Heading>
                      <Controller
                        name="urgency"
                        control={control}
                        render={({ field }) => (
                          <Select.Root value={field.value} onValueChange={field.onChange}>
                            <Select.Trigger placeholder="Pilih timeline" className="w-full" />
                            <Select.Content>
                              {["Segera (< 1 bulan)","1 - 3 Bulan","3 - 6 Bulan","6 - 12 Bulan","Lebih dari 1 Tahun"].map((item) => (
                                <Select.Item key={item} value={item}>{item}</Select.Item>
                              ))}
                            </Select.Content>
                          </Select.Root>
                        )}
                      />
                      <FieldError message={errors.urgency?.message} />
                    </Flex>

                  </Grid>

                  {watch("certificate") === "lainnya" && (
                    <Flex direction="column" gap="1">
                      <TextField.Root placeholder="Tulis jenis legalitas..." {...register("certificate_other")} />
                      <FieldError message={errors.certificate_other?.message} />
                    </Flex>
                  )}
                </Flex>
              </Tabs.Content>

              <Tabs.Content value="detail" className="w-full">
                <Grid columns={{ sm: "2" }} gap="4">
                  <TextField.Root placeholder="Kamar Tidur" {...register("bedroom")} />
                  <TextField.Root placeholder="Kamar Mandi" {...register("bathroom")} />
                  <TextField.Root placeholder="Luas Bangunan (m²)" {...register("building")} />
                  <TextField.Root placeholder="Luas Tanah (m²)" {...register("land")} />

                  {/* LISTRIK */}
                  <Flex direction={"column"} gap={"3"}>
                    <Heading size="2" weight="medium">Daya Listrik (VA)</Heading>
                    <Controller
                      name="electricity"
                      control={control}
                      render={({ field }) => (
                        <Select.Root value={field.value} onValueChange={field.onChange}>
                          <Select.Trigger placeholder="Pilih daya listrik" className="w-full" />
                          <Select.Content>
                            {["900","1300","2200","3500","4400","5500","6600"].map((item) => (
                              <Select.Item key={item} value={item}>{item} VA</Select.Item>
                            ))}
                          </Select.Content>
                        </Select.Root>
                      )}
                    />
                  </Flex>

                  {/* AIR */}
                  <Flex direction={"column"} gap={"3"}>
                    <Heading size="2" weight="medium">Sumber Air</Heading>
                    <Controller
                      name="water"
                      control={control}
                      render={({ field }) => (
                        <Select.Root value={field.value} onValueChange={field.onChange}>
                          <Select.Trigger placeholder="Pilih sumber air" className="w-full" />
                          <Select.Content>
                            {["PDAM","Sumur","Sumur Bor","PAM"].map((item) => (
                              <Select.Item key={item} value={item.toLowerCase()}>{item}</Select.Item>
                            ))}
                          </Select.Content>
                        </Select.Root>
                      )}
                    />
                  </Flex>

                </Grid>

                <Flex mt="4" gap="3" width={"100%"} justify={"between"}>
                  <label className="flex gap-2 items-center">
                    <Controller
                      name="carport"
                      control={control}
                      render={({ field }) => (
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      )}
                    />
                    Carport
                  </label>
                  {hasCarport && (
                    <TextField.Root placeholder="Jumlah Mobil" {...register("carport_count")} />
                  )}
                </Flex>
              </Tabs.Content>

              <Tabs.Content value="environment">
                <Flex direction="column" gap="3">
                  {["security_24_jam","one_gate","gereja","masjid","sekolah","supermarket","minimart"].map((f) => (
                    <label key={f} className="flex items-center gap-3 capitalize">
                      <Checkbox {...register(f as any)} /> {f.replace(/_/g, " ")}
                    </label>
                  ))}
                  <TextField.Root placeholder="Catatan tambahan..." {...register("notes")} />
                </Flex>
              </Tabs.Content>
            </Flex>

            <Flex justify="between" mt="6">
              <Button
                type="button"
                onClick={handlePrev}
                variant="ghost"
                className={activeTab === "buyer" ? "invisible" : ""}
              >
                <HiOutlineChevronLeft /> Back
              </Button>

              {activeTab !== "environment" ? (
                <Button type="button" onClick={handleNext}>
                  Next <HiOutlineChevronRight />
                </Button>
              ) : (
                <Button type="submit" color="green">
                  Cari Properti <RiWhatsappFill />
                </Button>
              )}
            </Flex>

          </Tabs.Root>
        </form>
      </Card>
    </Box>
  );
});

BuyerRequestForm.displayName = "BuyerRequestForm";
export default BuyerRequestForm;