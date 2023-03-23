import {category, category_icons} from "../../interfaces/category";

export const categories: category_icons[] = [
  {
    title: category.case,
    name: "Case",
    desc: 'This is the container for your computer parts. It is mostly aesthetic but must be large enough to fit your items.',
    icon: 'mobile alternate',
  },
  {
    title: category.cpu,
    name: "CPU",
    desc: 'CPU stands for Central Processing Unit. This will be the brain of your computer, so make sure to choose a good one!',
    icon: 'microchip',
  },
  {
    title: category.cpu_cooler,
    name: "CPU Cooler",
    desc: 'A cooler is necessary to help keep your computer from overheating.',
    icon: 'snowflake',
  },
  {
    title: category.graphics_card,
    name: "Video Card",
    desc: 'A video or graphics card speciallizes in performing operations a CPU has difficulty doing. This is not necessary, but can give your computer a major boost. In some cases multiple can be used.',
    icon: 'microchip',
  },
  {
    title: category.memory,
    name: "Memory",
    desc: 'A computer needs a place to store memory temporarily and this is where. You might consider getting multiple units.',
    icon: 'microchip',
  },
  {
    title: category.power_supply,
    name: "Power supply",
    desc: 'A power supply supplies your components with energy.',
    icon: 'plug',
  },
  {
    title: category.storage,
    name: "Storage",
    desc: 'This is the long-term storage of a computer. You can get more than one, if you plan to store a lot.',
    icon: 'hdd',
  },
  {
    title: category.operating_system,
    name: "Operating System",
    desc: 'This is the program that manages your whole computer.',
    icon: 'desktop',
  },
  {
    title: category.peripheral,
    name: "Peripherals",
    desc: 'Peripherals are the devices you plug in to a computer like keyboards, mouses, and monitors.',
    icon: 'keyboard',
  },
]
