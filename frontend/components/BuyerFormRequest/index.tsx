"use client";

import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Box,
  Card,
  Flex,
  Heading,
  Text,
  TextField,
  Select,
  Checkbox,
  Button,
  Grid,
  Tabs,
} from "@radix-ui/themes";
import { HiOutlineChevronRight, HiOutlineChevronLeft, HiOutlinePaperAirplane } from "react-icons/hi";
import { RiSendPlaneFill } from "react-icons/ri";

const formSchema = z.object({
  name: z.string().min(2, "Nama wajib diisi"),
  phone: z.string().min(10, "Nomor HP minimal 10 digit"),
  budget: z.string().min(1, "Pilih budget"),
  propertyType: z.string().min(1, "Pilih jenis properti"),
  certificate: z.string().min(1, "Pilih sertifikat"),
  certificate_other: z.string().optional(),
  urgency: z.string().min(1, "Pilih urgensi"),
  bedroom: z.string().optional(),
  bathroom: z.string().optional(),
  building: z.string().optional(),
  land: z.string().optional(),
  carport: z.boolean().optional(),
  carport_count: z.string().optional(),
  electricity: z.string().optional(),
  water: z.string().optional(),
  security: z.boolean().optional(),
  one_gate: z.boolean().optional(),
  masjid: z.boolean().optional(),
  sekolah: z.boolean().optional(),
  minimart: z.boolean().optional(),
});

type FormData = z.infer<typeof formSchema>;
const TABS = ["buyer", "property", "detail", "environment"];

export default function BuyerRequestForm() {
  const [isClient, setIsClient] = useState(false);
  const [activeTab, setActiveTab] = useState("buyer");

  useEffect(() => { setIsClient(true); }, []);

  const { register, handleSubmit, control, watch, trigger, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { 
      water: "pdam", 
      certificate: "shm (milik)", 
      propertyType: "rumah tinggal",
      electricity: "1300" 
    }
  });

  const hasCarport = watch("carport");
  const selectedCert = watch("certificate");

  const handleNext = async () => {
    const fieldsByTab: Record<string, (keyof FormData)[]> = {
      buyer: ["name", "phone", "budget"],
      property: ["propertyType", "certificate"],
    };
    const isValid = await trigger(fieldsByTab[activeTab] || []);
    if (isValid) {
      const currentIndex = TABS.indexOf(activeTab);
      if (currentIndex < TABS.length - 1) setActiveTab(TABS[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    const currentIndex = TABS.indexOf(activeTab);
    if (currentIndex > 0) setActiveTab(TABS[currentIndex - 1]);
  };

  const onSubmit = (data: FormData) => {
    const PHONE_NUMBER = "6281575735788";
    
    const message = `*Inquiry Properti Baru*\n\n` +
      `*Profil:* ${data.name} (${data.phone})\n` +
      `*Budget:* ${data.budget}\n` +
      `*Tipe:* ${data.propertyType}\n` +
      `*Spesifikasi:* KT ${data.bedroom || 0}/KM ${data.bathroom || 0}, Listrik ${data.electricity}VA, Air ${data.water}`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };

  if (!isClient) return null;

  return (
    <Box className="w-full max-w-150 md:max-w-full mx-auto py-4 px-0">
      <header className="mb-8 text-center md:text-start">
        <Heading size={{md: "7"}} weight="bold" className="tracking-tight text-slate-900 pb-2">
          Property Inquiry
        </Heading>
        <Text size="2" color="gray">
          Detail kebutuhan Anda membantu kami memberikan rekomendasi terbaik.
        </Text>
      </header>

      <Card size="4" className="shadow-sm border-slate-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
            <Tabs.List color="indigo" className="justify-center border-b border-slate-100 mb-6">
              {TABS.map((tab) => (
                <Tabs.Trigger key={tab} value={tab} className="px-4 pb-3 text-[10px] sm:text-xs uppercase tracking-wider font-semibold">
                  {tab === "buyer" ? "Profil" : tab === "property" ? "Kebutuhan" : tab === "detail" ? "Spesifikasi" : "Lingkungan"}
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            <Box className="min-h-85 py-2">
              {/* TAB: BUYER */}
              <Tabs.Content value="buyer">
                <Flex direction="column" gap="4">
                  <Grid columns={{ initial: "1", sm: "2" }} gap="4">
                    <Box>
                      <Text as="div" size="2" weight="medium" className="mb-1.5 text-slate-700">Nama Lengkap</Text>
                      <TextField.Root placeholder="John Doe" {...register("name")} variant="surface" autoComplete="off" />
                      {errors.name && <Text color="red" size="1" className="mt-1">{errors.name.message}</Text>}
                    </Box>
                    <Box>
                      <Text as="div" size="2" weight="medium" className="mb-1.5 text-slate-700">Nomor Telepon</Text>
                      <TextField.Root placeholder="0812..." {...register("phone")} variant="surface" />
                    </Box>
                  </Grid>
                  <Box>
                    <Text as="div" size="2" weight="medium" className="mb-1.5 text-slate-700">Alokasi Budget</Text>
                    <Controller name="budget" control={control} render={({ field }) => (
                      <Select.Root value={field.value} onValueChange={field.onChange}>
                        <Select.Trigger placeholder="Pilih rentang harga" className="w-full" />
                        <Select.Content>
                          {["Rp 100jt - 500jt", "Rp 500jt - 1M", "Rp 1M - 5M", "> Rp 5M"].map(b => (
                            <Select.Item key={b} value={b}>{b}</Select.Item>
                          ))}
                        </Select.Content>
                      </Select.Root>
                    )} />
                  </Box>
                </Flex>
              </Tabs.Content>

              {/* TAB: PROPERTY */}
              <Tabs.Content value="property">
                <Flex direction="column" gap="4">
                  <Grid columns={{ initial: "1", sm: "2" }} gap="4">
                    <Box>
                      <Text as="div" size="2" weight="medium" className="mb-1.5 text-slate-700">Tipe Properti</Text>
                      <Controller name="propertyType" control={control} render={({ field }) => (
                        <Select.Root value={field.value} onValueChange={field.onChange}>
                          <Select.Trigger className="w-full" />
                          <Select.Content>
                            {["Rumah Tinggal", "Apartemen/Condo", "Tanah Kavling", "Ruko/Komersial"].map(p => <Select.Item key={p} value={p.toLowerCase()}>{p}</Select.Item>)}
                          </Select.Content>
                        </Select.Root>
                      )} />
                    </Box>
                    <Box>
                      <Text as="div" size="2" weight="medium" className="mb-1.5 text-slate-700">Legalitas</Text>
                      <Controller name="certificate" control={control} render={({ field }) => (
                        <Select.Root value={field.value} onValueChange={field.onChange}>
                          <Select.Trigger className="w-full" />
                          <Select.Content>
                            {["SHM (Milik)", "HGB", "Lainnya"].map(c => <Select.Item key={c} value={c.toLowerCase()}>{c}</Select.Item>)}
                          </Select.Content>
                        </Select.Root>
                      )} />
                    </Box>
                  </Grid>
                </Flex>
              </Tabs.Content>

              {/* TAB: DETAIL */}
              <Tabs.Content value="detail">
                <Grid columns={{md: "2"}} gap="4" className="mb-6">
                  <Box>
                    <Text as="div" size="1" weight="medium" className="mb-1 uppercase text-slate-500">K. Tidur / K. Mandi</Text>
                    <Flex gap="2">
                       <TextField.Root placeholder="KT" {...register("bedroom")} className="w-full" />
                       <TextField.Root placeholder="KM" {...register("bathroom")} className="w-full" />
                    </Flex>
                  </Box>
                  <Box>
                    <Text as="div" size="1" weight="medium" className="mb-1 uppercase text-slate-500">Daya Listrik (VA)</Text>
                    <TextField.Root placeholder="Contoh: 1300" {...register("electricity")} />
                  </Box>
                  <Box>
                    <Text as="div" size="1" weight="medium" className="mb-1 uppercase text-slate-500">Luas Bangunan / Tanah (m²)</Text>
                    <Flex gap="2">
                       <TextField.Root placeholder="LB" {...register("building")} className="w-full" />
                       <TextField.Root placeholder="LT" {...register("land")} className="w-full" />
                    </Flex>
                  </Box>
                  <Box>
                    <Text as="div" size="1" weight="medium" className="mb-1 uppercase text-slate-500">Sumber Air</Text>
                    <Controller name="water" control={control} render={({ field }) => (
                      <Select.Root value={field.value} onValueChange={field.onChange}>
                        <Select.Trigger className="w-full" />
                        <Select.Content>
                          <Select.Item value="pdam">PDAM</Select.Item>
                          <Select.Item value="sumur">Sumur Bor / Artesis</Select.Item>
                        </Select.Content>
                      </Select.Root>
                    )} />
                  </Box>
                </Grid>
                <Flex direction="column" gap="3">
                  <Text as="label" size="2" className="flex items-center gap-2 text-slate-700">
                    <Checkbox {...register("carport")} /> Tersedia Carport
                  </Text>
                  {hasCarport && <TextField.Root placeholder="Kapasitas Kendaraan (Mobil)" size="2" {...register("carport_count")} className="ml-6" />}
                </Flex>
              </Tabs.Content>

              {/* TAB: ENVIRONMENT */}
              <Tabs.Content value="environment">
                <Text size="2" weight="bold" className="mb-6 text-slate-800">Fasilitas & Lingkungan:</Text>
                <Grid columns={{md: "2"}} gapX="4" gapY="4">
                  {[
                    { id: "security", label: "Security 24 Jam" },
                    { id: "one_gate", label: "One Gate System" },
                    { id: "masjid", label: "Dekat Rumah Ibadah" },
                    { id: "sekolah", label: "Area Pendidikan" },
                    { id: "minimart", label: "Minimarket / Pasar" },
                  ].map((item) => (
                    <Text key={item.id} as="label" size="2" className="flex items-center gap-2 text-slate-600 cursor-pointer">
                      <Checkbox {...register(item.id as any)} /> {item.label}
                    </Text>
                  ))}
                </Grid>
              </Tabs.Content>
            </Box>

            {/* ACTION FOOTER */}
            <Flex justify="between" className="mt-10 pt-6 border-t border-slate-100">
              <Button 
                type="button" variant="ghost" color="gray" 
                onClick={handlePrev}
                className={`${activeTab === "buyer" ? "invisible" : "visible"} cursor-pointer`}
              >
                <HiOutlineChevronLeft size={18} /> Kembali
              </Button>

              {activeTab !== "environment" ? (
                <Button type="button" onClick={handleNext} className="cursor-pointer px-6 bg-slate-900">
                  Lanjut <HiOutlineChevronRight size={18} />
                </Button>
              ) : (
                <Button type="submit" color="green" className="cursor-pointer px-6 shadow-md">
                  Hubungi Kami <RiSendPlaneFill size={18} />
                </Button>
              )}
            </Flex>
          </Tabs.Root>
        </form>
      </Card>
    </Box>
  );
}