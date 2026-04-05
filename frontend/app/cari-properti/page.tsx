"use client"

import React from 'react'
import classnames from 'classnames'
import Link from 'next/link'

import {
  Box, Card, Flex, Heading, Text, Grid,
  ChevronDownIcon,
  Dialog,
  Button
} from '@radix-ui/themes'

import { ArrowRightIcon } from '@radix-ui/react-icons'
import { PiBuildingApartmentFill } from 'react-icons/pi'
import { RiVerifiedBadgeFill } from 'react-icons/ri'
import { HiHome } from 'react-icons/hi'
import { BsFillLayersFill } from 'react-icons/bs'
import { AiFillShop } from 'react-icons/ai'
import { BiSolidFactory } from 'react-icons/bi'
import { GoClockFill, GoPasskeyFill } from 'react-icons/go'
import { MdKingBed, MdOutlineAddHomeWork } from 'react-icons/md'
import { FaHandHolding } from 'react-icons/fa'
import { TbBellRingingFilled, TbHomeCancel } from "react-icons/tb";
import { TiCancel } from "react-icons/ti";

import BuyerRequestForm, { BuyerRequestFormRef } from '@/components/BuyerFormRequest'

export default function Page() {
  const [open, setOpen] = React.useState(false)
  const formRef = React.useRef<BuyerRequestFormRef>(null)

  const listings: any[] = []

  const buyPropertyCategories = [
    { icon: <RiVerifiedBadgeFill size={24} />, label: "Terverifikasi" },
    { icon: <HiHome size={24} />, label: "Rumah" },
    { icon: <HiHome size={24} />, label: "Rumah Baru" },
    { icon: <PiBuildingApartmentFill size={24} />, label: "Apartemen" },
    { icon: <BsFillLayersFill size={24} />, label: "Tanah" },
    { icon: <AiFillShop size={24} />, label: "Ruko" },
    { icon: <AiFillShop size={24} />, label: "Tempat Usaha" },
    { icon: <MdKingBed size={24} />, label: "Kost" },
    { icon: <BiSolidFactory size={24} />, label: "Gudang & Pabrik" },
    { icon: <GoPasskeyFill size={24} />, label: "Tanpa Perantara" },
  ]

  const consignAndRentalCategories = [
    { icon: <FaHandHolding size={24} />, label: 'Titip Jual & Sewa Properti', page_url: '/titip-jual', soon: false },
    { icon: <MdOutlineAddHomeWork size={24} />, label: 'Pasang Iklan Jual / Sewa', page_url: '/pasang-iklan', soon: true }
  ]

  const rentPropertyCategories = [
    { icon: <HiHome size={24} />, label: "Rumah" },
    { icon: <PiBuildingApartmentFill size={24} />, label: "Apartemen" },
    { icon: <AiFillShop size={24} />, label: "Ruko" },
    { icon: <AiFillShop size={24} />, label: "Tempat Usaha" },
    { icon: <BiSolidFactory size={24} />, label: "Gudang & Pabrik" },
    { icon: <GoPasskeyFill size={24} />, label: "Tanpa Perantara" },
  ]

  return (
    <React.Fragment>

      <Box
        style={{ background: 'var(--indigo-11)', color: 'var(--white-a12)', overflowX: 'hidden' }}
        py={{ initial: "5", sm: "6", lg: "7" }}
        px={{ initial: "4", sm: "6", lg: "9" }}
      >
        <Flex
          direction={{ initial: "column", md: "row" }}
          justify={{ initial: "center", md: "between" }}
          align="center"
          gap="6"
        >
          <Flex
            align={{ initial: 'center', md: "start" }}
            direction="column"
            gap="3"
            px={{ initial: "1", md: "0" }}
            maxWidth={{sm: "31rem", md: '100%'}}
          >
            <Heading size={{initial: "7", md: "8"}} style={{ color: 'var(--yellow-6)' }}>
              #InstantDanMudah
            </Heading>

            <Text
                as="p"
                weight="medium"
                align={{ initial: "center", md: "left" }}
                size={{ initial: "2", md: "3", lg: "4" }}
            >
                Ribuan pilihan properti di{' '}
                <Text as="span" style={{ color: 'var(--yellow-6)' }}>
                    Semarang & sekitarnya.
                </Text>
                <br />
                Beli, sewa, atau investasi mulai hari ini.
            </Text>

          </Flex>

          <Flex
            align="center"
            justify="center"
            gap="2"
            className="relative overflow-hidden group animate-[pulse_2s_infinite] cursor-pointer bg-amber-300 hover:bg-amber-400 text-black px-5 py-3 rounded-md transition"
          >
            <Text weight={"bold"} size={"4"} className="relative flex items-center gap-2 z-10">
              Cek Propertinya
              <span className="transition-transform group-hover:translate-x-1">
                <ArrowRightIcon width={18} height={18} />
              </span>
            </Text>
          </Flex>
        </Flex>
      </Box>

      <Box
        py={{ initial: "6", sm: "6", lg: "6" }}
        px={{ initial: "6", sm: "7", lg: "9" }}
      >
        <Flex direction="column" gap="6">
            <Heading size={{initial: '5', md: '7'}}>Beli Properti</Heading>

            <Flex className="overflow-x-auto snap-x snap-mandatory gap-4 pb-1 [scrollbar-width:none] [ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {buyPropertyCategories.map((item, index) => {
                    const isFirst = index === 0

                    return (
                        <Card
                            key={item.label}
                            variant="classic"
                            className={classnames(
                                "snap-start hover:shadow-lg cursor-pointer shrink-0 text-center",
                                isFirst
                                ? "bg-(--yellow-2) hover:bg-(--yellow-4) text-(--mauve-10) w-30 p-[1.2rem_1.3rem]"
                                : "bg-(--indigo-2) hover:bg-(--mauve-4) text-(--mauve-10) w-30 p-[1.2rem_1.3rem]"
                            )}
                        >
                            <Flex
                                direction="column"
                                align="center"
                                justify="center"
                                gap="4"
                                className={"w-full h-full"}
                            >
                                <Box
                                    className={classnames(
                                        "flex items-center justify-center rounded-full border text-(--indigo-11)",
                                        isFirst ? "bg-(--yellow-2) border-(--yellow-6)" : "bg-(--indigo-2) border-(--indigo-6)"
                                    )}
                                    p="3"
                                >
                                    {item.icon}
                                </Box>
                                
                                <Text size="2" className="text-(--mauve-11) text-center w-full">
                                    {item.label}
                                </Text>
                            </Flex>
                        </Card>
                    )
                })}
            </Flex>

            <Heading size={{initial: '5', md: '7'}}>Sewa Properti</Heading>

            <Flex className="overflow-x-auto snap-x snap-mandatory gap-4 pb-1 [scrollbar-width:none] [ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {rentPropertyCategories.map((item, index) => {
                    const isFirst = index === 0

                    return (
                        <Card
                            key={item.label}
                            variant="classic"
                            className={classnames(
                                "snap-start hover:shadow-lg cursor-pointer shrink-0 text-center",
                                isFirst
                                ? "bg-(--yellow-2) hover:bg-(--yellow-4) text-(--mauve-10) w-30 p-[1.2rem_1.3rem]"
                                : "bg-(--indigo-2) hover:bg-(--mauve-4) text-(--mauve-10) w-30 p-[1.2rem_1.3rem]"
                            )}
                        >
                            <Flex
                                direction="column"
                                align="center"
                                justify="center"
                                gap="4"
                                className={"w-full h-full"}
                            >
                                <Box
                                    className={classnames(
                                        "flex items-center justify-center rounded-full border text-(--indigo-11)",
                                        isFirst ? "bg-(--yellow-2) border-(--yellow-6)" : "bg-(--indigo-2) border-(--indigo-6)"
                                    )}
                                    p="3"
                                >
                                    {item.icon}
                                </Box>
                                
                                <Text size="2" className="text-(--mauve-11) text-center w-full">
                                    {item.label}
                                </Text>
                            </Flex>
                        </Card>
                    )
                })}
            </Flex>

            <Heading size={{initial: '5', md: '7'}}>Titip Jual Dan Sewa Properti</Heading>

            <Flex className="overflow-x-auto snap-x snap-mandatory gap-4 pb-3 [scrollbar-width:none] [ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {consignAndRentalCategories.map((item, index) => {
                    const isFirst = index === 0

                    const soonBadge = item.soon
                        ? <span className="absolute top-0 right-8.5 z-10 bg-(--red-9) text-(--white-a12) text-[10px] font-semibold px-2.5 py-1.5 rounded-full">
                            <Flex gap={"2"}>
                                <Text>SOON</Text>
                                <GoClockFill size={13} />
                            </Flex>
                        </span>
                        : null


                    return (
                    <div key={item.label} className="relative pt-3 pr-3">
                        {soonBadge}

                        {!item.soon && item.page_url !== '' ? (
                            <Card
                                variant="classic"
                                className={classnames(
                                    "snap-start hover:shadow-lg cursor-pointer shrink-0 text-center",
                                    isFirst
                                    ? "bg-(--yellow-2) hover:bg-(--yellow-4) text-(--amber-12) w-30 p-[1.2rem_1.3rem]"
                                    : "bg-(--amber-2) hover:bg-(--mauve-4) text-(--amber-11) w-30 p-[1.2rem_1.3rem]"
                                )}
                            >
                                <Link href={item.page_url}>
                                    <Flex
                                        direction="column"
                                        align="center"
                                        justify="center"
                                        gap="4"
                                        className={classnames(
                                            "w-full h-full",
                                            item.soon ? "pt-4 pb-1" : "py-2"
                                        )}
                                    >
                                        <Box
                                            className={classnames(
                                                "flex items-center justify-center rounded-full border text-(--amber-11)",
                                                isFirst ? "bg-(--yellow-2) border-(--yellow-6)" : "bg-(--amber-2) border-(--amber-6)"
                                            )}
                                        p="3"
                                        >
                                            {item.icon}
                                        </Box>
                                        <Text size="2" className="text-center w-full">
                                            {item.label}
                                        </Text>
                                    </Flex>
                                </Link>
                            </Card>
                        ) : (
                            <Card
                                variant="classic"
                                className={classnames(
                                    "snap-start hover:shadow-lg cursor-pointer shrink-0 text-center",
                                    isFirst
                                    ? "bg-(--yellow-2) hover:bg-(--yellow-4) text-(--amber-12) w-30 p-[1.2rem_1.3rem]"
                                    : "bg-(--amber-2) hover:bg-(--mauve-4) text-(--amber-11) w-30 p-[1.2rem_1.3rem]"
                                )}
                            >
                                <Flex
                                    direction="column"
                                    align="center"
                                    justify="center"
                                    gap="4"
                                    className={classnames(
                                        "w-full h-full",
                                        item.soon ? "pt-4 pb-1" : "py-2"
                                    )}
                                >
                                    <Box
                                        className={classnames(
                                            "flex items-center justify-center rounded-full border text-(--amber-11)",
                                            isFirst ? "bg-(--yellow-2) border-(--yellow-6)" : "bg-(--amber-2) border-(--amber-6)"
                                        )}
                                        p="3"
                                    >
                                        {item.icon}
                                    </Box>
                                    <Text size="2" className="text-center w-full">
                                        {item.label}
                                    </Text>
                                </Flex>
                            </Card>
                        )}
                    </div>
                    )
                })}

            </Flex>

            <Flex direction={"column"} gap={"3"}>
                <Heading size={{initial: '5', md: '6'}}>
                    Proyek Terverifikasi
                </Heading>

                <Text className='w-full max-w-xs'>
                    Properti dengan detail info terbaru, akurat, dan diverifikasi berkala ke developer
                </Text>
            </Flex>

            <Flex className="overflow-x-auto snap-x snap-mandatory gap-4 pb-3 [scrollbar-width:none] [ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {listings.length < 1 ? (
                    <Flex
                        direction={{ initial: "column", md: "row" }}
                        width="100%"
                        maxWidth={{lg: "50rem"}}
                        py={{ initial: "6", md: "6" }}
                        px={{ initial: "6", sm: "7", lg: "6" }}
                        align="center"
                        justify="between"
                        gap={{ initial: "5", md: "4" }}
                        className="bg-(--slate-2) rounded-md border border-(--slate-6)"
                    >
                        <Flex direction={{ initial: "column", md: "row" }} align="center" gap="5">
                            {/* Icon */}
                            <Box className="flex items-center justify-center rounded-full bg-(--red-3)" p="3">
                                <TbHomeCancel size={36} className="text-(--red-10)" />
                            </Box>

                            {/* Text */}
                            <Flex direction="column" gap={{ initial: "2", md: "2" }} align={{ initial: "center", md: "start" }} width={"100%"} maxWidth={"21rem"}>
                                <Heading size="4" color="red" className="capitalize">
                                    Properti tidak ditemukan
                                </Heading>

                                <Text
                                    size="2"
                                    align={{ initial: "center", md: "left" }}
                                    weight="light"
                                    style={{ color: 'var(--slate-10)' }}
                                    className="max-w-sm"
                                >
                                    Kami sedang mengumpulkan pilihan terbaik. Tinggalkan permintaan dan kami hubungi kamu.
                                </Text>
                            </Flex>
                        </Flex>

                        {/* Dialog trigger */}
                        <Dialog.Root
                            open={open}
                            onOpenChange={(open) => {
                                if(!open) formRef.current?.reset()
                                setOpen(open)
                            }}
                        >
                            <Dialog.Trigger>
                                <Flex align="center" gap="2" className="cursor-pointer shrink-0 bg-(--indigo-9) hover:bg-(--indigo-10) text-(--white-a12) px-5 py-2.5 rounded-md transition-colors">
                                    <Text size="2" weight="bold">Beritahu Saya</Text>
                                    <TbBellRingingFilled size={16} />
                                </Flex>
                            </Dialog.Trigger>

                            <Dialog.Content maxWidth="480px" className='text-center'>
                                <Flex direction={"column"} gap={"1"} align={"center"} mt={"3"}>
                                    <Dialog.Title>
                                        Temukan Properti Impian Anda
                                    </Dialog.Title>

                                    <Dialog.Description
                                        size="2"
                                        mb="2"
                                        style={{ color: 'var(--slate-10)' }}
                                        className="max-w-2xs"
                                    >
                                        Isi kebutuhan Anda, dan dapatkan rekomendasi properti yang paling cocok.
                                    </Dialog.Description>
                                </Flex>

                                <BuyerRequestForm ref={formRef} />

                                <Flex justify="end" mt="4">
                                    <Dialog.Close>
                                        <Button color='red' variant='soft'>
                                            Batal
                                        </Button>
                                    </Dialog.Close>
                                </Flex>
                            </Dialog.Content>
                        </Dialog.Root>
                    </Flex>
                ) : (<></>)}
            </Flex>

            <Flex direction={"column"} gap={"3"}>
                <Heading size={{initial: '5', md: '6'}}>
                    Properti Terbaru
                </Heading>

                <Text className='w-full max-w-2xs'>
                    Properti terbaru dipilih secara akurat dan harga pilihan terbaik
                </Text>
            </Flex>

            <Flex className="overflow-x-auto snap-x snap-mandatory gap-4 pb-3 [scrollbar-width:none] [ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {listings.length < 1 ? (
                    <Flex
                        direction={{ initial: "column", md: "row" }}
                        width="100%"
                        maxWidth={{lg: "50rem"}}
                        py={{ initial: "6", md: "6" }}
                        px={{ initial: "6", sm: "7", lg: "6" }}
                        align="center"
                        justify="between"
                        gap={{ initial: "5", md: "4" }}
                        className="bg-(--slate-2) rounded-md border border-(--slate-6)"
                    >
                        <Flex direction={{ initial: "column", md: "row" }} align="center" gap="5">
                            {/* Icon */}
                            <Box className="flex items-center justify-center rounded-full bg-(--red-3)" p="3">
                                <TbHomeCancel size={36} className="text-(--red-10)" />
                            </Box>

                            {/* Text */}
                            <Flex direction="column" gap={{ initial: "2", md: "2" }} align={{ initial: "center", md: "start" }} width={"100%"} maxWidth={"21rem"}>
                                <Heading size="4" color="red" className="capitalize">
                                    Properti tidak ditemukan
                                </Heading>

                                <Text
                                    size="2"
                                    align={{ initial: "center", md: "left" }}
                                    weight="light"
                                    style={{ color: 'var(--slate-10)' }}
                                    className="max-w-sm"
                                >
                                    Kami sedang mengumpulkan pilihan terbaik. Tinggalkan permintaan dan kami hubungi kamu.
                                </Text>
                            </Flex>
                        </Flex>

                        {/* Dialog trigger */}
                        <Dialog.Root
                            open={open}
                            onOpenChange={(open) => {
                                if(!open) formRef.current?.reset()
                                setOpen(open)
                            }}
                        >
                            <Dialog.Trigger>
                                <Flex align="center" gap="2" className="cursor-pointer shrink-0 bg-(--indigo-9) hover:bg-(--indigo-10) text-(--white-a12) px-5 py-2.5 rounded-md transition-colors">
                                    <Text size="2" weight="bold">Beritahu Saya</Text>
                                    <TbBellRingingFilled size={16} />
                                </Flex>
                            </Dialog.Trigger>

                            <Dialog.Content maxWidth="480px" className='text-center'>
                                <Flex direction={"column"} gap={"1"} align={"center"} mt={"3"}>
                                    <Dialog.Title>
                                        Temukan Properti Impian Anda
                                    </Dialog.Title>

                                    <Dialog.Description
                                        size="2"
                                        mb="2"
                                        style={{ color: 'var(--slate-10)' }}
                                        className="max-w-2xs"
                                    >
                                        Isi kebutuhan Anda, dan dapatkan rekomendasi properti yang paling cocok.
                                    </Dialog.Description>
                                </Flex>

                                <BuyerRequestForm ref={formRef} />

                                <Flex justify="end" mt="4">
                                    <Dialog.Close>
                                        <Button color='red' variant='soft'>
                                            Batal
                                        </Button>
                                    </Dialog.Close>
                                </Flex>
                            </Dialog.Content>
                        </Dialog.Root>
                    </Flex>
                ) : (<></>)}
            </Flex>

        </Flex>
      </Box>

    </React.Fragment>
  )
}