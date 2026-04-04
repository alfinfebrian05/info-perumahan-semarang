"use client";

import { Container, Heading, Text, Box } from "@radix-ui/themes";

export type ContentNode =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "subsection"; title: string; content: ContentNode[] };

export type Section = {
  title: string;
  content: ContentNode[];
};

export type LegalData = {
  title: string;
  description: string;
  sections: Section[];
  updatedAt: string;
};

function RenderNode(node: ContentNode, key: number) {
  switch (node.type) {
    case "paragraph":
      return (
        <Text
          as="p"
          key={key}
          size="3"
          className="pb-3 leading-relaxed text-gray-700 text-sm sm:text-base"
        >
          {node.text}
        </Text>
      );

    case "list":
      return (
        <Box asChild key={key}>
          <ul className="list-disc pl-5 pb-4 space-y-1 text-gray-700 text-sm sm:text-base">
            {node.items.map((item, i) => (
              <li key={i} className="leading-relaxed">
                <Text as="span">{item}</Text>
              </li>
            ))}
          </ul>
        </Box>
      );

    case "subsection":
      return (
        <Box key={key} className="pt-4 pb-2">
          <Heading
            size="3"
            className="pb-2 text-sm sm:text-base font-semibold"
          >
            {node.title}
          </Heading>
          {node.content.map((child, i) => RenderNode(child, i))}
        </Box>
      );

    default:
      return null;
  }
}

export default function LegalPage({
  title,
  description,
  sections,
  updatedAt,
}: LegalData) {
  return (
    <main>
      <Container
        size="3"
        className="px-5 sm:px-8 lg:px-0 py-8 sm:py-12"
      >
        <Box className="max-w-3xl mx-auto">
          <Heading
            size="7"
            className="pb-3 text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight"
          >
            {title}
          </Heading>

          <Text
            as="p"
            size="3"
            className="text-gray-600 pb-1 text-sm sm:text-base font-medium"
          >
            {description}
          </Text>

          <Text
            as="p"
            size="1"
            className="text-gray-400 pb-6 text-xs"
          >
            Terakhir diperbarui: {updatedAt}
          </Text>

          <Box className="bg-gray-50 p-4 rounded-md mb-8 border border-gray-100">
            <Text
              as="p"
              size="2"
              className="text-gray-700 italic leading-snug text-xs sm:text-sm"
            >
              Dengan menggunakan layanan ini, Anda menyatakan telah membaca,
              memahami, dan menyetujui seluruh isi dokumen ini.
            </Text>
          </Box>

          <Box>
            {sections.map((section, i) => (
              <section key={i} className="border-t border-gray-100 pt-6 pb-4">
                <Heading
                  size="4"
                  className="pb-3 text-lg sm:text-xl text-gray-900"
                >
                  {i + 1}. {section.title}
                </Heading>

                {section.content.map((node, idx) =>
                  RenderNode(node, idx)
                )}
              </section>
            ))}
          </Box>
        </Box>
      </Container>
    </main>
  );
}