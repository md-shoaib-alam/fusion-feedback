import { Bug, Lightbulb, Palette, Sparkle, Wrench } from "lucide-react";

export const CATEGORY_TYPE = [
  "Feature",
  "Improvement",
  "Bug",
  "Design",
  "Other",
];

export const CATEGORIES = {
  Feature: {
    bg: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30",
    text: "text-blue-700 dark:text-blue-300",
    border: "border-blue-500 dark:border-blue-500",
    light: "bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300",
    icon: Sparkle,
  },
  Improvement: {
    bg: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30",
    text: "text-green-700 dark:text-green-300",
    border: "border-green-500 dark:border-green-500",
    light: "bg-green-100 dark:bg-green-950 text-green-300 dark:text-green-300",
    icon: Wrench,
  },
  Bug: {
    bg: "bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/30",
    text: "text-red-700 dark:text-red-300",
    border: "border-red-500 dark:border-red-500",
    light: "bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300",
    icon: Bug,
  },
  Design: {
    bg: "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30",
    text: "text-purple-700 dark:text-purple-300",
    border: "border-purple-500 dark:border-purple-500",
    light:
      "bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300",
    icon: Palette,
  },
  Other: {
    bg: "bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50",
    text: "text-gray-700 dark:text-gray-300",
    border: "border-gray-400 dark:border-gray-500",
    light: "bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300",
    icon: Lightbulb,
  },
} as const;

export type CategoryType = keyof typeof CATEGORIES;

export function getCategoryDesign(
  category: string,
): (typeof CATEGORIES)[keyof typeof CATEGORIES] {
  const key = category as CategoryType;
  return CATEGORIES[key] || CATEGORIES.Other;
}
