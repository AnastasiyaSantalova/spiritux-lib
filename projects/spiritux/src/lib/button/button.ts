import {
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';
import { SpirituxButtonProps } from './button.types';
import { CommonModule } from '@angular/common';
import { getIconComponent } from '../icons/icon.registry';

@Component({
  standalone: true,
  selector: 'spiritux-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class SpirituxButtonComponent implements SpirituxButtonProps {
  readonly prefix = 'spiritux-button';
  protected classNames: string[] = [];

  @Input() name: SpirituxButtonProps['name'] = '';
  @Input() type: SpirituxButtonProps['type'] = 'button';
  @Input() variant: SpirituxButtonProps['variant'] = 'solid';
  @Input() color: SpirituxButtonProps['color'] = 'primary';
  @Input() size: SpirituxButtonProps['size'] = 'small';
  @Input() icon: SpirituxButtonProps['icon'] = 'none';
  @Input() iconPosition: SpirituxButtonProps['iconPosition'] = 'right';
  @Input() iconOnly: SpirituxButtonProps['iconOnly'] = false;
  @Input() shape: SpirituxButtonProps['shape'] = 'pill';
  @Input() disabled: SpirituxButtonProps['disabled'];
  @Input() loading: SpirituxButtonProps['loading'];
  @Input() fullWidth: SpirituxButtonProps['fullWidth'] = false;
  @Input() ariaLabel: SpirituxButtonProps['ariaLabel'] = '';
  @Output() onButtonClick = new EventEmitter();

  @HostBinding('class.icon-only') get isIconOnly() {
    return this.iconOnly;
  }

  @HostBinding('class.small') get isSmall() {
    return this.size === 'small';
  }

  @HostBinding('class.medium') get isMedium() {
    return this.size === 'medium';
  }

  @HostBinding('class.large') get isLarge() {
    return this.size === 'large';
  }

  @HostBinding('class.focused') isFocused = false;

  onFocus() {
    this.isFocused = true;
  }

  onBlur() {
    this.isFocused = false;
  }

  onClick(event: Event) {
    event.stopPropagation();
    event.preventDefault();

    this.onButtonClick.emit();
  }

  get iconComponent() {
    if(!this.icon || this.icon === 'none') {
      return null;
    }

    return getIconComponent(this.icon);
  }

  constructor(private elem: ElementRef) {}

  ngOnInit() {
    this.classNames = [
      this.prefix,
      `${this.prefix}--${this.variant}`,
      `${this.prefix}--${this.color}`,
      this.size ? `${this.prefix}--${this.size}` : undefined,
      this.icon !== 'none' ? `${this.prefix}--with-icon` : undefined,
      this.iconOnly ? `${this.prefix}--icon-only` : undefined,
      this.name && this.icon !== 'none' && !this.iconOnly
        ? `${this.prefix}--icon-${this.iconPosition}`
        : undefined,
      `${this.prefix}--shape-${this.shape}`,
      this.loading ? `${this.prefix}--loading` : undefined,
      this.fullWidth ? `${this.prefix}--full-width` : undefined,
      this.disabled ? `${this.prefix}--disabled` : undefined,
    ].filter((elem): elem is string => typeof elem === 'string');
  }

  ngAfterViewInit() {
    console.log(!this.iconOnly && this.name, this.icon !== 'none', this.icon);
    if (this.icon) {
      const target = this.elem.nativeElement.querySelector('.icon-only, .icon');

      if (target) {
        target.style.maskImage = `url('/assets/icons/${this.icon}.svg')`;
      }
    }
  }
}
