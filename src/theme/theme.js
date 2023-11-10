import { extendTheme } from '@chakra-ui/react';
import { CardComponent } from './additions/card/card';
import { buttonStyles } from './components/button';
import { badgeStyles } from './components/badge';
import { inputStyles } from './components/input';
import { progressStyles } from './components/progress';
import { sliderStyles } from './components/slider';
import { textareaStyles } from './components/textarea';
import { switchStyles } from './components/switch';
import { linkStyles } from './components/link';
import { breakpoints } from './foundations/breakpoints';
import { globalStyles } from './styles';

/**
 * Custom Chakra UI Theme
 *
 * This file extends the default Chakra UI theme by adding custom styles and components.
 * The theme includes styles for buttons, badges, inputs, progress bars, sliders, textareas, switches, and links.
 * Additionally, it incorporates a custom CardComponent for enhanced card styling.
 *
 * The theme is designed to be modular, allowing for easy customization and extension.
 *
 * Components and Styles Overview:
 * - Badge Styles: Custom styles for badges.
 * - Button Styles: Custom styles for buttons.
 * - Link Styles: Custom styles for links.
 * - Progress Styles: Custom styles for progress bars.
 * - Slider Styles: Custom styles for sliders.
 * - Input Styles: Custom styles for input components.
 * - Textarea Styles: Custom styles for textarea components.
 * - Switch Styles: Custom styles for switch components.
 * - CardComponent: A custom card component for enhanced card styling.
 *
 * Global Styles and Foundations:
 * - Breakpoints: Custom breakpoints for responsive design.
 * - Global Styles: Additional global styles applied throughout the application.
 *
 * @returns {Theme} The extended Chakra UI theme.
 */
export default extendTheme(
  breakpoints,
  globalStyles,
  badgeStyles, // badge styles
  buttonStyles, // button styles
  linkStyles, // link styles
  progressStyles, // progress styles
  sliderStyles, // slider styles
  inputStyles, // input styles
  textareaStyles, // textarea styles
  switchStyles, // switch styles
  CardComponent // card component
);
