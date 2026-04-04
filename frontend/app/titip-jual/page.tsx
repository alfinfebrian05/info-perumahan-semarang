"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";

import {
  Box,
  Flex,
  Heading,
  Text,
  IconButton,
  Card,
  Inset
} from "@radix-ui/themes";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  HomeIcon,
  RocketIcon,
  CheckCircledIcon,
  ArrowRightIcon,
} from "@radix-ui/react-icons";

import { FaqAccordion } from "@/components/FaqAccordion";
import { ButtonCTA } from "@/components/ButtonCTA";
// import { FloatingActions } from "@/components/FloatingActions";
import Link from "next/link";
import FloatingActions from "@/components/FloatingActions";

export default function Page() {
  const WHATSAPP_NUMBER: string = "6281575735788"

  const autoplay = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      containScroll: false,
      dragFree: true,
    },
    [autoplay.current]
  );

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const items = [
    "Jual Rumah di Semarang Lebih Cepat",
    "Gratis Promosi ke Ribuan Pembeli",
    "Titip Jual Properti Tanpa Ribet",
    "Iklan Properti Online Mudah",
    "Dibantu Sampai Closing",
    "Jangkau Pembeli Lebih Luas",
  ];

  const steps = [
    {
      title: "Pasang Iklan Properti",
      desc: "Cukup unggah foto dan detail properti Anda ke kami, titip jual jadi lebih mudah tanpa repot.",
      icon: <HomeIcon width="22" height="22" />,
    },
    {
      title: "Kami Promosikan",
      desc: "Properti Anda akan kami promosikan ke ribuan calon pembeli dengan cepat dan efektif.",
      icon: <RocketIcon width="22" height="22" />,
    },
    {
      title: "Terjual & Closing",
      desc: "Kami bantu negosiasi hingga transaksi selesai dengan transparan, aman dan nyaman.",
      icon: <CheckCircledIcon width="22" height="22" />,
    },
  ];

  const reasons_item = [
    {
      text: "proses aman dan transaksi transparan",
      image: "illustration/transparent-transaction.svg",
    },
    {
      text: "lebih cepat terjual dengan kombinasi offline dan online channel",
      image: "illustration/omni-channel.svg",
    },
    {
      text: "agen profesional menangani dari awal hingga akhir proses jual beli",
      image: "illustration/professional-agent.svg",
    },
  ]

  const faqItems = [
    {
      question: "Ada biaya tambahan?",
      answer: "Tidak sama sekali! Hanya bayar komisi jika properti terjual—transparan & aman.",
    },
    {
      question: "Berapa cepat rumah terjual?",
      answer: "Sangat cepat! Promosi online & offline kami bantu properti Anda ditemukan lebih cepat.",
    },
    {
      question: "Bagaimana proses titip jual?",
      answer: "Unggah foto & detail properti Anda, lalu tim kami urus promosi dan negosiasi hingga closing.",
    },
    {
      question: "Harus bertemu pembeli?",
      answer: "Tidak perlu. Tim kami bisa jadi mediator, tetap aman & nyaman.",
    },
    {
      question: "Bagaimana komisinya?",
      answer: "Hanya bayar komisi sekitar 1 s/d 3% saat transaksi berhasil, tanpa biaya tersembunyi.",
    },
    {
      question: "Apakah dipromosikan offline juga?",
      answer: "Ya! Gabungan promosi online & offline menjangkau lebih banyak pembeli.",
    },
  ];

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanPrev(emblaApi.canScrollPrev());
      setCanNext(emblaApi.canScrollNext());
    };

    const onPointerUp = () => {
      emblaApi.scrollTo(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("pointerUp", onPointerUp);

    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
      emblaApi.off("pointerUp", onPointerUp);
    };
  }, [emblaApi]);

  return (
    <Box style={{ minHeight: "100dvh", backgroundColor: "var(--blue-12)" }}>
      <Box
        style={{
          minHeight: "100dvh",
          backgroundColor: "var(--gray-1)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Flex
          direction={{ initial: "column", md: "row" }}
          justify="center"
          align="center"
          width="100%"
          gap="4"
          p="4"
          mt={{ initial: "1", lg: "3" }}
        >
          <Box width="100%" maxWidth={{ initial: "100vw", md: "41vw", lg: "22vw" }} className="hover:cursor-pointer">
            <Link href="/cari-properti">
              <Card size="2">
                <Inset clip="padding-box" side="all">
                  <Box className="relative w-full h-[clamp(220px,40vw,420px)] overflow-hidden group">
                    <Image
                      fill
                      priority
                      src="https://images.unsplash.com/photo-1638783590248-b44a2f158954"
                      alt="rumah semarang"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <Box className="absolute inset-0 bg-linear-to-t from-black/70 to-black/20" />
                    <Box className="absolute bottom-4 left-4 right-4 text-white animate-[fadeUp_0.8s_ease]">
                      <Heading size={{ initial: "5", lg: "4" }} className="leading-snug">
                        Sedang mencari rumah atau properti murah di Semarang dan sekitarnya?
                      </Heading>
                      <Flex align="center" mt="3" gap="2">
                        <Text size="2" mt={{ initial: "0", lg: "2" }} className="opacity-90">
                          Lihat sekarang
                        </Text>
                        <ArrowRightIcon />
                      </Flex>
                    </Box>
                  </Box>
                </Inset>
              </Card>
            </Link>
          </Box>

          <Box
            width="100%"
            maxWidth={{ initial: "100vw", md: "41vw", lg: "22vw" }}
            className="hover:cursor-pointer"
            onClick={() => {
              const el = document.getElementById("section-titip-jual");
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 120;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
          >
            <Card size="2">
              <Inset clip="padding-box" side="all">
                <Box className="relative w-full h-[clamp(220px,40vw,420px)] overflow-hidden group">
                  <Image
                    fill
                    src="https://images.unsplash.com/photo-1607355739828-0bf365440db5"
                    alt="jual properti"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <Box className="absolute inset-0 bg-linear-to-t from-black/75 to-black/20" />
                  <Box className="absolute bottom-4 left-4 right-4 text-white animate-[fadeUp_1s_ease]">
                    <Heading size="4" className="leading-snug">
                      Ingin properti atau rumah <br /> anda cepat terjual?
                    </Heading>
                    <Text size="2" mt="2" className="opacity-90">
                      Daftar disini — sudah 100+ rumah terjual bulan ini
                    </Text>
                  </Box>
                </Box>
              </Inset>
            </Card>
          </Box>
        </Flex>

        <Flex pt={{ initial: "2", lg: "3" }} mb="6" px="4" direction="column" align="center">
          <Box
            id="section-titip-jual"
            style={{
              width: "100%",
              maxWidth: "54rem",
              borderRadius: "0.6rem",
              overflow: "hidden",
            }}
          >
            <Image
              src="banners/Banner-Website_02.svg"
              alt="banner"
              width={1000}
              height={1000}
              priority={false}
              loading="lazy"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>

          <Box style={{ position: "relative", width: "100%" }}>
            <Box
              ref={emblaRef}
              onMouseEnter={() => autoplay.current.stop()}
              onMouseLeave={() => autoplay.current.play()}
              style={{ overflow: "hidden", width: "100%" }}
            >
              <Flex style={{ gap: "20px" }}>
                {items.map((text, i) => {
                  const isActive = i === selectedIndex;

                  return (
                    <Flex
                      key={i}
                      align="center"
                      justify="center"
                      style={{ flex: "0 0 28%", padding: "50px 0" }}
                    >
                      <Box
                        style={{
                          width: isActive ? "clamp(150px, 18vw, 220px)" : "clamp(110px, 14vw, 180px)",
                          height: isActive ? "clamp(150px, 18vw, 220px)" : "clamp(110px, 14vw, 180px)",
                          borderRadius: "50%",
                          backgroundColor: "#FFD400",
                          border: "3px dashed black",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center",
                          padding: "14px",
                          fontWeight: 600,
                          transition: "all 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
                          transform: isActive ? "scale(1.12)" : "scale(0.92)",
                          opacity: isActive ? 1 : 0.6,
                        }}
                      >
                        <Text size="2">{text}</Text>
                      </Box>
                    </Flex>
                  );
                })}
              </Flex>
            </Box>

            <Flex
              display={{ initial: "flex", md: "none" }}
              justify="between"
              align="center"
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                right: 0,
                transform: "translateY(-50%)",
                pointerEvents: "none",
              }}
            >
              <Box style={{ pointerEvents: "auto" }}>
                <IconButton onClick={() => emblaApi?.scrollPrev()}>
                  <ChevronLeftIcon />
                </IconButton>
              </Box>
              <Box style={{ pointerEvents: "auto" }}>
                <IconButton onClick={() => emblaApi?.scrollNext()}>
                  <ChevronRightIcon />
                </IconButton>
              </Box>
            </Flex>
          </Box>

          <Box style={{ width: "100%", maxWidth: "54rem" }} mb="8">
            <Flex direction="column" align="center" gap="4" mb="5">
              <Heading align="center" style={{ textTransform: "capitalize" }}>
                Proses titip jualnya aman, mudah, nyaman
              </Heading>
              <Text
                align="center"
                size="3"
                style={{ maxWidth: "20rem", color: "var(--gray-11)", marginBottom: "16px" }}
              >
                3 langkah mudah jual rumah atau properti
              </Text>
            </Flex>

            <Flex direction="column" gap="4">
              {steps.map((step, i) => (
                <Flex key={i} gap="3" style={{ position: "relative" }}>
                  <Box style={{ position: "relative", width: "40px", display: "flex", justifyContent: "center" }}>
                    <Box
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "var(--blue-9)",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 2,
                        transition: "all 0.25s ease",
                      }}
                    >
                      {step.icon}
                    </Box>
                    {i < steps.length - 1 && (
                      <Box
                        style={{
                          position: "absolute",
                          top: "40px",
                          width: "2px",
                          height: "calc(100% + 16px)",
                          backgroundColor: "var(--gray-6)",
                        }}
                      />
                    )}
                  </Box>

                  <Box
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      backgroundColor: "var(--blue-2)",
                      borderRadius: "0.6rem",
                      padding: "1rem",
                      border: "1px solid var(--blue-7)",
                      boxShadow: "0 0.2rem 0.6rem var(--blue-4)",
                      transition: "all 0.25s ease",
                    }}
                  >
                    <Text weight="bold" style={{ color: "var(--blue-11)" }}>
                      {step.title}
                    </Text>
                    <Text size="2" style={{ marginTop: "4px", color: "var(--gray-10)" }}>
                      {step.desc}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </Flex>
          </Box>

          <Box style={{ textAlign: "center" }} width="100%" px={{ initial: "2", md: "9" }} mb={{ initial: "0", sm: "5", md: "6" }}>
            <Flex direction="column" align="center" justify="center" gap="3">
              <Heading style={{ textTransform: "capitalize" }} size={{ initial: "5", sm: "6", md: "7" }}>
                mengapa harus di
              </Heading>
              <Heading style={{ textTransform: "capitalize", color: "var(--blue-11)" }} size={{ initial: "7", sm: "6", md: "7" }}>
                info perumahan properti semarang?
              </Heading>
            </Flex>
          </Box>

          <Flex
            direction="column"
            align="center"
            width="100%"
            maxWidth="44rem"
            mx="auto"
            mb={{ initial: "3", sm: "6", md: "9" }}
            px="4"
            gap={{ initial: "6", md: "9" }}
          >
            {reasons_item.map((reason, i) => (
              <Flex
                key={reason.text}
                position="relative"
                width="100%"
                direction={{ initial: "column", sm: "row" }}
                align="center"
                justify="center"
                minHeight={{ initial: "auto", sm: "150px" }}
                gap={{ initial: "4", sm: "0" }}
              >
                <Box
                  position={{ initial: "relative", sm: "absolute" }}
                  left={{ initial: "0", md: "4" }}
                  width={{ initial: "60%", sm: "45%" }}
                  display={{ initial: "none", md: "block" }}
                  style={{ zIndex: "1", transform: "translateX(10%)" }}
                >
                  <Image
                    src={reason.image}
                    alt={reason.text}
                    width={600}
                    height={600}
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </Box>

                <Box
                  position={{ initial: "relative", sm: "absolute" }}
                  left={{ initial: "0", md: "4" }}
                  width={{ initial: "80%", sm: "45%" }}
                  display={{ initial: "block", md: "none" }}
                  style={{ zIndex: "1", transform: "translateX(10%)" }}
                >
                  <Image
                    src={reason.image}
                    alt={reason.text}
                    width={600}
                    height={600}
                    style={{ width: "80%", height: "auto", display: "block" }}
                  />
                </Box>

                <Box
                  position={{ initial: "relative", sm: "absolute" }}
                  right={{ sm: "0", md: "4" }}
                  width="100%"
                  maxWidth={{ initial: "100%", sm: "20rem", md: "16rem" }}
                  style={{
                    backgroundColor: "var(--blue-11)",
                    textAlign: "center",
                    color: "white",
                    borderRadius: "0.8rem",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  }}
                  py={{ initial: "4", sm: "5" }}
                  px={{ initial: "6", sm: "6" }}
                >
                  <Text
                    weight="bold"
                    size={{ initial: "2", sm: "5", md: "4" }}
                    align={{ initial: "center", sm: "left" }}
                    style={{ lineHeight: "1.6", textTransform: "capitalize" }}
                  >
                    {reason.text}
                  </Text>
                </Box>
              </Flex>
            ))}
          </Flex>

          <Box width="100%" maxWidth="44rem" mx="auto" px="4" mt="6" mb="6">
            <Flex direction="column" align="center" gap="6">
              <Heading size={{ initial: "6", md: "7" }} align="center">
                Pertanyaan Umum (FAQ)
              </Heading>
              <Box width="100%">
                <FaqAccordion items={faqItems} />
              </Box>
            </Flex>
          </Box>

          <ButtonCTA />
        </Flex>
      </Box>

      <FloatingActions />
    </Box>
  );
}