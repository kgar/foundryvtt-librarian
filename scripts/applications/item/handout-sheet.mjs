import { CONSTANTS } from "../../constants.mjs";

const { HandlebarsApplicationMixin } = foundry.applications.api;
const { ItemSheetV2 } = foundry.applications.sheets;

export default class HandoutSheet extends HandlebarsApplicationMixin(
  ItemSheetV2
) {
  static DEFAULT_OPTIONS = {
    tag: "form",
    form: {
      submitOnChange: true,
    },
    classes: [CONSTANTS.MODULE_ID, "item"],
    actions: {},
    window: {
      controls: [],
    },
  };

  static PARTS = {
    form: {
      template: "modules/librarian/templates/handout-sheet.hbs",
    },
  };
}
