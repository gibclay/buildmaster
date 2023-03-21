import { SemanticICONS } from "semantic-ui-react";

export interface category_icons {
  title: category;
  name: string;
  icon: SemanticICONS;
}

export enum category {
  case, 
  cpu, 
  cpu_cooler,
  graphics_card,
  memory, 
  power_supply, 
  storage, 
  operating_system, 
  peripheral
}
