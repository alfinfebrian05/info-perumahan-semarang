"use client";

import { Container, Heading, Text, Box } from "@radix-ui/themes";

export type AboutSection = {
  title: string;
  content?: string;
  features?: string[];
};

export type AboutData = {
  sections: AboutSection[];
};

export default function AboutPage({ sections }: AboutData) {
  return (
    <main>
      <Container size="3" className="px-5 sm:px-8 lg:px-0 py-4 sm:py-6">
        <Box className="max-w-3xl mx-auto">
          <Box className="space-y-6">
            {sections.map((section, i) => (
              <Box key={i} className="pb-2">
                <Heading 
                  size="4" 
                  className="pb-2 text-gray-900 font-bold text-lg sm:text-xl"
                >
                  {section.title}
                </Heading>
                
                {section.content && (
                  <Text 
                    as="p" 
                    size="3" 
                    className="text-gray-700 leading-relaxed pb-2 text-sm sm:text-base"
                  >
                    {section.content}
                  </Text>
                )}

                {section.features && (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {section.features.map((feature, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-start gap-2 bg-gray-50 p-3 rounded-md border border-gray-100"
                      >
                        <span className="text-blue-500 font-bold">•</span>
                        <Text size="2" className="text-gray-700 font-medium leading-tight text-xs sm:text-sm">
                          {feature}
                        </Text>
                      </li>
                    ))}
                  </ul>
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </main>
  );
}