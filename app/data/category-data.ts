import { Bug, Lightbulb, Palette, Sparkle, Wrench } from "lucide-react";

export const CATEGORIES = {
  Feature: {
    bg: "bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-800/30",
    text: "text-purple-700 dark:text-purple-300",
    border: "border-purple-500 dark:border-purple-500",
    light:
      "bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-300",
    icon: Sparkle,
  },
  Improvement: {
    bg: "bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50",
    text: "text-gray-700 dark:text-gray-300",
    border: "border-gray-400 dark:border-gray-500",
    light: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300",
    icon: Wrench,
  },
  Bug: {
    bg: "bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/30",
    text: "text-red-700 dark:text-red-300",
    border: "border-red-500 dark:border-red-500",
    light: "bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-300",
    icon: Bug,
  },
  Design: {
    bg: "bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/30 dark:to-pink-800/30",
    text: "text-pink-700 dark:text-pink-300",
    border: "border-pink-500 dark:border-pink-500",
    light: "bg-pink-100 dark:bg-pink-800 text-pink-700 dark:text-pink-300",
    icon: Palette,
  },
  Other: {
    bg: "bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/30 dark:to-yellow-800/30",
    text: "text-yellow-700 dark:text-yellow-300",
    border: "border-yellow-500 dark:border-yellow-500",
    light:
      "bg-yellow-100 dark:bg-yellow-800 text-yellow-700 dark:text-yellow-300",
    icon: Lightbulb,
  },
} as const;

export type CategoryType = keyof typeof CATEGORIES;

export function getCategoryDesign(
  category: string,
): (typeof CATEGORIES)[keyof typeof CATEGORIES]{
  const key = category as CategoryType
  return CATEGORIES[key] || CATEGORIES.Other
}
