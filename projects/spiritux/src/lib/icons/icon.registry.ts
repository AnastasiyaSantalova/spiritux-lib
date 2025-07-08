import { Type } from "@angular/core";
import { SpirituxButtonIcons } from "../button/button.types";

import { CloseIconComponent } from "./close-icon/close-icon.component";
import { ArrowRightIconComponent } from "./arrow-right-icon/arrow-right-icon.component";
import { ArrowLeftIconComponent } from "./arrow-left-icon/arrow-left-icon.component";
import { AngleRightIconComponent } from "./angle-right-icon/angle-right-icon.component";
import { AngleLeftIconComponent } from "./angle-left-icon/angle-left-icon.component";

export interface SpirituxIcon {}

export function getIconComponent(icon: SpirituxButtonIcons): Type<SpirituxIcon> | null {
  switch (icon) {
    case 'close': return CloseIconComponent;
    case 'arrow-right': return ArrowRightIconComponent;
    case 'arrow-left': return ArrowLeftIconComponent;
    case 'angle-right': return AngleRightIconComponent;
    case 'angle-left': return AngleLeftIconComponent;
    default: return null;
  }
}
