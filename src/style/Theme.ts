import { createTheme } from '@shopify/restyle';
import { palette } from './Palette';
import { fonts } from './Fonts';
import { DeviceHelper } from '../helper/DeviceHelper';

export const theme = createTheme({
	colors: {
		...palette,
	},
	breakpoints: {
		phone: 0,
		tablet: 768,
	},
	dark: false,
	spacing: {
		zero: 0,
		ss: 2,
		es: 4,
		e6:6,
		s: 8,
		ssr:10,
		sr: 13,
		srr: 14,
		r: 16,
		rr: 20,
		m: 24,
		mes: 28,
		l: 32,
		lm: 36,
		ls: 40,
		lss:45,
		el: 54,
		se: 68,
		see:80,
		el100: 100,
		ll: 140,
		lll:220,
		mR: -16,
		mL: -32,
		mLL: 60,
		mLLL: 80,
		mS: -8,
		mES: -4,
		mEss: -2,
		mEs: -1,
		none: 0,
	},
	textVariants: {
		defaults: {},
		h1: {
			color: 'white',
			fontSize: 26,
			fontFamily: fonts.bold,
			textAlign: 'left',
		},
		h2: {
			color: 'white',
			fontSize: 24,
			fontFamily: fonts.regular,
			textAlign: 'left',
			textTransform: 'uppercase',
		},
		h3: {
			color: 'white',
			fontSize: 18,
			fontFamily: fonts.regular,
			textAlign: 'left',
			textTransform: 'uppercase',
		},
		title: {
			color: 'white',
			fontSize: 14,
			fontFamily: fonts.regular,
			textAlign: 'left',
			textTransform: 'uppercase',
		},
		caption: {
			color: 'gray',
			fontSize: 10,
			fontFamily: fonts.regular,
			textAlign: 'left',
		},
		b1: {
			color: 'white',
			fontSize: 15,
			fontFamily: fonts.regular,
			textAlign: 'left',
		},
		b2: {
			color: 'black',
			fontSize: 14,
			fontFamily: fonts.regular,
			textAlign: 'left',
		},
		b3: {
			color: 'white',
			fontSize: 16,
			fontFamily: fonts.regular,
			textAlign: 'left',
		},
		b4: {
			color: 'gray',
			fontSize: 12,
			fontFamily: fonts.bold,
			textAlign: 'left',
		},
		b5: {
			color: 'black',
			fontSize: 12,
			fontFamily: fonts.bold,
			textAlign: 'left',
		},
		inputHint: {
			color: 'gray',
			fontSize: 14,
			fontFamily: fonts.bold,
			textAlign: 'left',
		},
		authTitle: {
			color: 'black',
			fontSize: 20,
			fontFamily: fonts.bold,
			textAlign: 'center',
		},
		authMessage: {
			color: 'gray3',
			fontSize: 14,
			fontFamily: fonts.regular,
			textAlign: 'center',
		},
	},
	cardVariants: {
		defaults: {
			width: DeviceHelper.width() - 48,
			margin: 'r',
			shadowColor: 'ffBlack',
			shadowOffset: { width: 0, height: 3 },
			shadowOpacity: 0.5,
			shadowRadius: 4,
			elevation: 4,
			borderRadius: 10,
			backgroundColor: 'white',
		},
		big: {
			width: DeviceHelper.width() - 48,
			height: DeviceHelper.height() / 1.3,
		},
	},
});

export type Theme = typeof theme;
export type Color = keyof (typeof theme)['colors'];
export default theme;