import { SemanticICONS } from "semantic-ui-react";

export interface category_icons {
  title: category;
  desc: string;
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
