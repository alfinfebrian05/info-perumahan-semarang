"use client"

import { useState, useEffect } from "react"
import { Box, Flex, Text, IconButton } from "@radix-ui/themes"
import { ChevronUpIcon } from "@radix-ui/react-icons"
import classnames from "classnames"

const WHATSAPP_NUMBER = "6281575735788"

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <>
      <Box
        className={classnames(
          "fixed right-4 z-999 transition-all duration-300",
          showScrollTop ? "bottom-20 opacity-100 translate-y-0" : "bottom-4 opacity-100 translate-y-2"
        )}
      >
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            "Halo Veve, saya tertarik dengan layanan titip jual, sewa, beli properti. Saya ingin menjual properi saya, bisa dibantu?"
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Flex
            align="center"
            gap="2"
            className={classnames(
              "bg-green-500 hover:bg-green-600",
              "text-white",
              "px-4 py-4 rounded-full",
              "shadow-lg",
              "transition-all duration-300",
              "hover:scale-105",
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.52 3.48A11.88 11.88 0 0012.01 0C5.37 0 .01 5.37.01 12c0 2.11.55 4.17 1.6 6l-1.7 6.2 6.35-1.66A11.96 11.96 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.2-3.48-8.52zM12 22c-1.82 0-3.6-.5-5.15-1.45l-.37-.22-3.77.98 1.01-3.68-.24-.38A9.94 9.94 0 012 12c0-5.52 4.48-10 10-10 2.67 0 5.18 1.04 7.07 2.93A9.94 9.94 0 0122 12c0 5.52-4.48 10-10 10zm5.39-7.44c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15s-.77.97-.95 1.17c-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.8-1.67-2.1-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.13 3.25 5.17 4.56.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/>
            </svg>
            <Text size="2" weight="bold" className="hidden sm:block">
              Chat Veve
            </Text>
          </Flex>
        </a>
    </Box>

      <Box
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 999,
          pointerEvents: showScrollTop ? "auto" : "none",
          opacity: showScrollTop ? 1 : 0,
          transform: showScrollTop ? "translateY(0) scale(1)" : "translateY(20px) scale(0.9)",
          transition: "all 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <IconButton
          size="3"
          radius="full"
          onClick={scrollToTop}
          style={{
            backgroundColor: "var(--yellow-9)",
            color: "black",
            boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          }}
        >
          <ChevronUpIcon width="18" height="18" />
        </IconButton>
      </Box>
    </>
  )
}