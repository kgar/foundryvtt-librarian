import HandoutSheet from "./applications/item/handout-sheet.mjs";
import { CONSTANTS } from "./constants.mjs";

Hooks.once("init", () => {
  const documentSheetConfig = foundry.applications.apps.DocumentSheetConfig;

  documentSheetConfig.registerSheet(Item, CONSTANTS.MODULE_ID, HandoutSheet, {
    types: ["loot"],
    label: "LIBRARIAN.HandoutSheet",
  });
});
