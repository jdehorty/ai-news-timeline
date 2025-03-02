// Import data from individual month files
import { februaryData } from './february2025Data';
import { marchData } from './march2025Data';
// Add more imports as you create data for more months

// Categories for filtering
export const categories = [
  "All",
  "Model Releases",
  "Product Launches",
  "Research Breakthroughs",
  "Corporate Partnerships",
  "Policy Regulation",
  "AI Ethics Safety",
  "Industry Analysis",
  "Robotics Automation"
];

// Companies for filtering
export const companies = [
  "All",
  "OpenAI",
  "Google",
  "Anthropic",
  "xAI",
  "Mistral AI",
  "ByteDance",
  "Meta",
  "Amazon",
  "DeepMind",
  "Figure",
  "LangChain",
  "LessWrong",
  "Sourcegraph",
  "Descript",
  "Microsoft",
  "Apple",
  "Stability AI",
  "Various"
];

// Available months for selection
export const availableMonths = [
  "February 2025",
  "March 2025",
  // Add more months as you create data for them
];

// Map month names to their data
export const timelineDataByMonth = {
  "February 2025": februaryData,
  "March 2025": marchData,
  // Add more months as you create data for them
};

// Export all timeline data combined (for backward compatibility)
export const timelineData = [
  ...februaryData,
  ...marchData,
  // Add more months as you create data for them
]; 