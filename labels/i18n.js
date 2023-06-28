import * as Localization from "expo-localization";
import I18n from "i18n-js";
import {en, fr} from "./localization";


i18n.locale = Localization.locale;

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true;

// Define the supported translations
I18n.translations = {
  fr,
  en,
};

export default I18n;