import "styled-components";
import type { ThemeType } from './utilities/theme';

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {
    [key: string]: string;
  }
}
