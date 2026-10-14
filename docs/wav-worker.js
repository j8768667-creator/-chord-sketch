import {renderSoundFonts} from './wav-render.js?v=banks4';
onmessage=async({data})=>{try{const buffer=await renderSoundFonts(data.banks||[{id:'main',buffer:data.bank}],data.events,data.settings,data.duration,progress=>postMessage({progress}));postMessage({buffer},[buffer]);}catch(error){postMessage({error:error.message||'Audio rendering failed.'});}};
