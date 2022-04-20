interface Resource {
  name: string | null;
  img: string | null;
}

const Ores: Resource[] = [
  { name: "Iron", img: "../assets/Icon_Iron_Ore_256.png" },
  { name: "Copper", img: "../assets/Icon_Copper_Ore_256.png" },
  { name: "Limestone", img: "../assets/Icon_Stone_256.png" },
  { name: "Caterium", img: "../assets/Icon_Caterium_Ore_256.png" },
  { name: "Coal", img: "../assets/Icon_Coal_Ore_256.png" },
  { name: "Raw Quartz", img: "../assets/Icon_Quartz_Crystal_256.png" },
  { name: "Sulfur", img: "../assets/Icon_Sulfur_256.png" },
  { name: "Bauxite", img: "../assets/Icon_Bauxite_256.png" },
  { name: "S.A.M Ore", img: "../assets/Icon_SAM_Ore_256.png" },
  { name: "Uranium", img: "../assets/Icon_Uranium_Ore_256.png" },
];

const Ingots: Resource[] = [
  { name: "Iron", img: "../assets/Icon_IronIngot_256.png" },
  { name: "Copper", img: "../assets/Icon_CopperIngot_256.png" },
  { name: "Caterium", img: "../assets/Icon_CateriumIngot_256.png" },
  { name: "Steel", img: "../assets/Icon_SteelIngot_256.png" },
  { name: "Aluminum", img: "../assets/Icon_AluminumIngot_256.png" },
];

const Minerals: Resource[] = [
  { name: "Concrete", img: "../assets/Icon_Concrete_256.png" },
  { name: "Quartz Crystal", img: "../assets/Icon_Quartz_Crystal_256.png" },
  { name: "Silica", img: "../assets/Icon_Silica_256.png" },
  { name: "Copper Powder", img: "../assets/Icon_CopperPowder_256.png" },
  { name: "Polymer Resin", img: "../assets/Icon_PolymerResin_256.png" },
  { name: "Petroleum Coke", img: "../assets/Icon_PetroleumCoke_256.png" },
  { name: "Aluminum Scrap", img: "../assets/Icon_AluminumScrap_256.png" },
];

const Liquids: Resource[] = [
  { name: "Water", img: "../assets/Icon_LiquidWater_Pipe_256.png" },
  { name: "Crude Oil", img: "../assets/Icon_LiquidOil_Pipe_256.png" },
  {
    name: "Heavy Oil Residue",
    img: "../assets/Icon_LiquidHeavyOilResidue_Pipe_256.png",
  },
  { name: "Fuel", img: "../assets/Icon_LiquidFuel_Pipe_256.png" },
  { name: "Liquid Biofuel", img: "../assets/Icon_LiquidBiofuel_Pipe_256.png" },
  { name: "Turbo Fuel", img: "../assets/Icon_LiquidTurboFuel_Pipe_256.png" },
  {
    name: "Alumina Solution",
    img: "../assets/Icon_LiquidAlumina_Pipe_256.png",
  },
  {
    name: "Sulfuric Acid",
    img: "../assets/Icon_LiquidSulfuricAcid_Pipe_256.png",
  },
  { name: "Nitric Acid", img: "../assets/Icon_LiquidNitricAcid_Pipe_256.png" },
];

export { Ores, Ingots, Minerals, Liquids, Resource };
