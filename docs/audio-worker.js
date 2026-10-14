importScripts('transcribe.js');
self.onmessage=({data})=>{try{const raw=Transcribe.analyse(new Float32Array(data.samples),data.sampleRate,data.part,progress=>self.postMessage({progress}));self.postMessage({notes:Transcribe.quantize(raw,data.tempo,data.grid,data.align)});}catch(error){self.postMessage({error:error.message||'Could not analyse this clip.'});}};
