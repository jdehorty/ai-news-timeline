// Import data from individual month files
import { februaryData } from './february2025Data';
import { marchData } from './march2025Data';
import { aprilData } from './april2025Data';
import { mayData } from './may2025Data';
import { juneData } from './june2025Data';
import { julyData } from './july2025Data';
import { augustData } from './august2025Data';
import { septemberData } from './september2025Data';
import { octoberData } from './october2025Data';

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
  "All",
  "February 2025",
  "March 2025",
  "April 2025",
  "May 2025",
  "June 2025",
  "July 2025",
  "August 2025",
  "September 2025",
  "October 2025"
];

// Map month names to their data
export const timelineDataByMonth = {
  "February 2025": februaryData,
  "March 2025": marchData,
  "April 2025": aprilData,
  "May 2025": mayData,
  "June 2025": juneData,
  "July 2025": julyData,
  "August 2025": augustData,
  "September 2025": septemberData,
  "October 2025": octoberData
};

// Export all timeline data combined (for backward compatibility)
export const timelineData = [
  ...februaryData,
  ...marchData,
  ...aprilData,
  ...mayData,
  ...juneData,
  ...julyData,
  ...augustData,
  ...septemberData,
  ...octoberData
]; 