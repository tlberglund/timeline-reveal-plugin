export const DEFAULT_CONFIG = {
   defaultSpan: '10 years',
   position: 'bottom',
   height: 56,
   centerLabel: true,
   centerLineTop: 20,
   labelFormat: 'auto',
   noTimestamp: 'fade',
   epochs: [],
   epochStyle: 'bar',
   animation: {
      duration: 600,
      easing: 'ease-in-out',
   },
   eraSuffix: {
      bc: 'BC',
      ad: 'AD',
   },
};

export function resolveConfig(userConfig) {
   if(!userConfig || typeof userConfig !== 'object') {
      return { ...DEFAULT_CONFIG, animation: { ...DEFAULT_CONFIG.animation }, eraSuffix: { ...DEFAULT_CONFIG.eraSuffix } };
   }

   const merged = { ...DEFAULT_CONFIG, ...userConfig };

   merged.animation = {
      ...DEFAULT_CONFIG.animation,
      ...(userConfig.animation || {}),
   };

   merged.eraSuffix = {
      ...DEFAULT_CONFIG.eraSuffix,
      ...(userConfig.eraSuffix || {}),
   };

   merged.epochs = Array.isArray(userConfig.epochs)
      ? userConfig.epochs.map(e => ({ ...e }))
      : [];

   if(merged.epochStyle !== 'bar' && merged.epochStyle !== 'line') {
      console.warn('resolveConfig: invalid epochStyle', merged.epochStyle, "; falling back to 'bar'");
      merged.epochStyle = 'bar';
   }

   return merged;
}
