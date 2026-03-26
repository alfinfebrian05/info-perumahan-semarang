"use client";

import * as React from "react";
import { Accordion } from "radix-ui";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import styles from "./styles.module.css";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ items }) => (
  <Accordion.Root
    className={styles.Root}
    type="single"
    collapsible
    defaultValue="faq-0"
  >
    {items.map((faq, index) => (
      <Accordion.Item
        key={index}
        className={styles.Item}
        value={`faq-${index}`}
      >
        <AccordionTrigger>{faq.question}</AccordionTrigger>
        <AccordionContent>{faq.answer}</AccordionContent>
      </Accordion.Item>
    ))}
  </Accordion.Root>
);

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Accordion.Trigger>
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className={styles.Header}>
    <Accordion.Trigger
      className={classNames(styles.Trigger, className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon className={styles.Chevron} aria-hidden />
    </Accordion.Trigger>
  </Accordion.Header>
));

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Accordion.Content>
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames(styles.Content, className)}
    {...props}
    ref={forwardedRef}
  >
    <div className={styles.ContentText}>{children}</div>
  </Accordion.Content>
));