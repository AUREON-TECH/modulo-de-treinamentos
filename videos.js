function videoEmbedLink(raw){
 try{
  const u=new URL(raw);
  if(u.protocol!=='https:')return '';
  let id='';
  if(['youtube.com','www.youtube.com'].includes(u.hostname)){
   if(u.pathname==='/watch')id=u.searchParams.get('v')||'';
   else if(u.pathname.startsWith('/shorts/')||u.pathname.startsWith('/embed/'))id=u.pathname.split('/')[2];
  }else if(u.hostname==='youtu.be'||u.hostname==='www.youtu.be'){id=u.pathname.slice(1)}
  if(/^[a-zA-Z0-9_-]{11}$/.test(id))return 'https://www.youtube-nocookie.com/embed/'+id;
  if(['vimeo.com','www.vimeo.com'].includes(u.hostname)&&/^\/[0-9]+$/.test(u.pathname))return 'https://player.vimeo.com/video/'+u.pathname.slice(1);
 }catch(_){}
 return '';
}
let videoList=[];
async function videoAulas(){
 setNav('trilhas');
 app.innerHTML='<div class="loader"><div class="spinner"></div><strong>Carregando biblioteca de aprendizagem...</strong></div>';
 const {data,error}=await db.from('capta_academy_video_lessons').select('*').order('sort_order');
 if(error){app.innerHTML='<div class="empty">Não foi possível carregar a biblioteca de videoaulas.</div>';return}
 videoList=(data||[]).filter(x=>x.track===S.profile.track);
 app.innerHTML=`<section class="hero compact"><div class="eyebrow">CAPTA EVOLVE • UNIVERSIDADE CORPORATIVA</div><h1>Biblioteca de videoaulas</h1><p>Roteiros preparados para treinamento, com objetivos e tópicos de estudo. O vídeo fica disponível quando a gestão publicar um link autorizado.</p><div class="module-meta"><span class="pill">${trackLabel(S.profile.track)}</span><span class="pill">${videoList.length} aulas planejadas</span><span class="pill">${videoList.filter(x=>videoEmbedLink(x.video_url)).length} vídeos publicados</span></div></section>
 <section class="grid">${videoList.map(x=>`<article class="card module-card"><div><div class="module-num">${videoEmbedLink(x.video_url)?'VÍDEO DISPONÍVEL':'ROTEIRO DE ESTUDO'}</div><h3>${safe(x.title)}</h3><p>${safe(x.summary)}</p><div class="module-meta"><span class="pill">${Number(x.duration_minutes)} min (planejado)</span></div></div><button class="secondary-btn" onclick="openVideoLesson('${x.id}')">${videoEmbedLink(x.video_url)?'Assistir e estudar':'Ler roteiro'}</button></article>`).join('')}</section>`;
}
function openVideoLesson(id){
 const v=videoList.find(x=>x.id===id);if(!v){location.hash='videoaulas';return}
 setNav('trilhas');const embed=videoEmbedLink(v.video_url);
 app.innerHTML=`<section class="hero compact"><div class="eyebrow">UNIVERSIDADE • ${safe(trackLabel(v.track).toUpperCase())}</div><h1>${safe(v.title)}</h1><p>${safe(v.summary)}</p><div class="hero-actions"><a href="#videoaulas" class="secondary-btn">Voltar à biblioteca</a></div></section>
 ${embed?`<section class="card" style="overflow:hidden;padding:0"><iframe src="${embed}" style="width:100%;aspect-ratio:16/9;border:0;display:block" title="${safe(v.title)}" allow="accelerometer;encrypted-media;gyroscope;picture-in-picture" allowfullscreen loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe></section>`:'<div class="notice">O vídeo ainda não foi publicado. Use o roteiro abaixo para estudar o conteúdo com sua liderança.</div>'}
 <div class="section-head"><div><h2>Roteiro e objetivos da aula</h2><p>Exercícios de estudo para o próximo atendimento.</p></div></div>
 <section class="lesson-list">${(v.learning_points||[]).map((p,i)=>`<article class="card lesson"><div class="lesson-icon">${i+1}</div><div><strong>Ponto de aprendizagem ${i+1}</strong><p>${safe(p)}</p></div></article>`).join('')}</section>
 <section class="card certificate-teaser" style="margin-top:20px"><div><div class="cert-icon">✓</div><div><strong>Pratique e valide seu aprendizado</strong><p>Faça os quizzes da trilha oficial para registrar aprovação e XP.</p></div></div><a href="#trilhas" class="primary-btn">Ir às provas</a></section>`;
}
async function editVideoUrl(e){
 e.preventDefault();if(!S.isManager)return;
 const f=new FormData(e.currentTarget),id=String(f.get('video_id')),url=String(f.get('video_url')).trim();
 if(url&&!videoEmbedLink(url)){toast('Informe um link válido do YouTube ou Vimeo.','error');return}
 const {error}=await db.from('capta_academy_video_lessons').update({video_url:url||null,updated_at:new Date().toISOString()}).eq('id',id);
 toast(error?'Não foi possível salvar o vídeo.':'Vídeo atualizado.',error?'error':'success');
 if(!error)e.currentTarget.reset();
}
