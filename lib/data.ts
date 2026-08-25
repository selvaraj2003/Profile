import portfolioDataRaw from "@/data/portfolioData.json";
import { PortfolioData } from "@/types/portfolio";

export const defaultPortfolioData: PortfolioData = portfolioDataRaw as PortfolioData;

/**
 * Fetch portfolio data synchronously (server components) or asynchronously (client hydration/testing)
 */
export async function getPortfolioData(delayMs: number = 0): Promise<PortfolioData> {
  if (delayMs > 0) {
    await new Promise((resolve) => setTimeout(resolve, delayMs));
  }
  return defaultPortfolioData;
}
