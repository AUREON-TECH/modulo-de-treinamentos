
const TRACK_LABELS={captador:'Captador',liner:'Liner',closer:'Closer'};
const TRACK_SUBTITLES={
  captador:'Abordagem, qualificação e geração de oportunidades',
  liner:'Conexão, diagnóstico e construção de valor',
  closer:'Decisão, negociação e fechamento responsável'
};

const COURSES={
captador:[
{id:'captador-1',title:'Mentalidade de Alta Performance',desc:'Postura, energia, disciplina e padrão de execução de um captador forte.',xp:300,lessons:[
['captador-1.1','O papel do captador','Você cria a primeira impressão da experiência. Postura aberta, energia controlada e comunicação clara aumentam a confiança.'],
['captador-1.2','Regra dos 3 segundos','Ao identificar um casal dentro do perfil, decida e inicie a abordagem rapidamente. Pensar demais reduz presença e naturalidade.'],
['captador-1.3','Meta de processo','Controle volume de abordagens, qualidade da conversa e consistência. O resultado melhora quando o processo melhora.']],quiz:{q:'Qual é a prioridade de um captador de alta performance?',o:['Esperar apenas clientes que demonstrem interesse','Controlar volume, qualidade e consistência','Falar o máximo possível sem ouvir'],a:1}},
{id:'captador-2',title:'Abordagem que Para o Cliente',desc:'Como abrir conversa com naturalidade e ganhar atenção sem pressionar.',xp:400,lessons:[
['captador-2.1','Presença antes da fala','Contato visual, sorriso leve, distância adequada e corpo voltado ao casal. A abordagem começa antes da primeira palavra.'],
['captador-2.2','Abertura curta','Use uma frase simples, humana e objetiva. Primeiro conquiste atenção; depois explique.'],
['captador-2.3','Microcompromisso','Faça uma pergunta fácil que mantenha a conversa e gere uma resposta natural.']],quiz:{q:'Uma boa abertura deve ser:',o:['Longa para explicar tudo','Curta, natural e seguida de uma pergunta','Agressiva para impedir a saída'],a:1}},
{id:'captador-3',title:'Qualificação Inteligente',desc:'Descubra rapidamente se o casal tem perfil sem transformar a conversa em interrogatório.',xp:450,lessons:[
['captador-3.1','Conversa, não formulário','Alterne pergunta e contexto. Uma pergunta por vez e sempre com tom de conversa.'],
['captador-3.2','Sinais de perfil','Observe disponibilidade, composição, interesse, momento da viagem e critérios internos da operação.'],
['captador-3.3','Transição elegante','Ao confirmar perfil, conecte o benefício ao próximo passo sem mudar o assunto de forma brusca.']],quiz:{q:'Qual a melhor forma de qualificar?',o:['Fazer todas as perguntas de uma vez','Conversar e validar critérios aos poucos','Evitar perguntas'],a:1}},
{id:'captador-4',title:'Objeções sem Confronto',desc:'Aprenda a lidar com “sem tempo”, “não quero” e “depois eu vejo” com leveza.',xp:500,lessons:[
['captador-4.1','Não rebata','Objeção não é briga. Valide primeiro, entenda e só depois esclareça.'],
['captador-4.2','Sem tempo','Reduza incerteza com objetividade. Explique duração e próximo passo sem inventar promessa.'],
['captador-4.3','Não tenho interesse','Descubra o motivo real com uma pergunta curta. Se a pessoa realmente não quiser, encerre com respeito.']],quiz:{q:'Ao receber uma objeção, o primeiro passo é:',o:['Contradizer imediatamente','Validar e entender antes de responder','Aumentar o tom'],a:1}},
{id:'captador-5',title:'Encaminhamento e Fechamento',desc:'Transforme uma boa conversa em ação clara, sem deixar o cliente esfriar.',xp:550,lessons:[
['captador-5.1','Próximo passo claro','Quando houver aceite, conduza com clareza e diga exatamente o que acontece agora.'],
['captador-5.2','Recapitule o valor','Antes de encaminhar, reforce em uma frase o benefício e o combinado.'],
['captador-5.3','Passagem de bastão','Transmita segurança na transição para o próximo profissional e evite informação conflitante.']],quiz:{q:'Depois do aceite do casal, você deve:',o:['Abrir várias novas possibilidades','Conduzir para o próximo passo com clareza','Voltar ao início da apresentação'],a:1}},
{id:'captador-6',title:'Campo: Ritmo, Ponto e Consistência',desc:'Como manter performance durante o dia e recuperar rapidamente após negativas.',xp:600,lessons:[
['captador-6.1','Ritmo de campo','Após uma negativa, reposicione-se e volte para a próxima oportunidade sem carregar a conversa anterior.'],
['captador-6.2','Leitura do ponto','Observe fluxo, direção das pessoas, horários e zonas de melhor abordagem.'],
['captador-6.3','Fechamento do dia','Revise números, objeções repetidas e o que funcionou. Escolha um ajuste para o próximo turno.']],quiz:{q:'Depois de uma sequência de negativas, o melhor é:',o:['Parar por um longo período','Recuperar postura e voltar ao processo','Mudar totalmente o discurso a cada cliente'],a:1}}
],
liner:[
{id:'liner-1',title:'Recepção e Primeira Impressão',desc:'Comece a experiência com presença, clareza e confiança.',xp:300,lessons:[
['liner-1.1','Receba com energia controlada','Acolha sem exagero. Apresente-se, organize o ambiente e faça o casal se sentir orientado.'],
['liner-1.2','Conexão nos primeiros minutos','Use perguntas leves para entender contexto, viagem e expectativa antes de entrar na apresentação.'],
['liner-1.3','Alinhamento de expectativa','Explique de forma simples como será a conversa e respeite o tempo combinado.']],quiz:{q:'O primeiro objetivo do Liner é:',o:['Começar falando do produto','Criar confiança e alinhar a experiência','Fazer perguntas sem contexto'],a:1}},
{id:'liner-2',title:'Rapport e Leitura do Casal',desc:'Construa conexão real sem parecer roteiro decorado.',xp:400,lessons:[
['liner-2.1','Perguntas que abrem conversa','Prefira perguntas abertas e relevantes ao momento do casal.'],
['liner-2.2','Escuta e espelhamento','Escute palavras, ritmo e prioridades. Resuma o que entendeu para confirmar.'],
['liner-2.3','Leitura emocional do casal','Observe engajamento, dúvidas e desconforto sem rotular ou pressionar.']],quiz:{q:'Rapport forte acontece quando você:',o:['Imita a pessoa','Escuta e adapta a comunicação com respeito','Fala sem pausas'],a:1}},
{id:'liner-3',title:'Diagnóstico e Qualificação Profunda',desc:'Descubra motivadores e critérios que realmente importam.',xp:450,lessons:[
['liner-3.1','Descubra motivadores','Entenda o que o casal valoriza na experiência, viagens e decisões.'],
['liner-3.2','Valide prioridades','Confirme quais benefícios são relevantes antes de apresentar soluções.'],
['liner-3.3','Mapeie critérios de decisão','Identifique tempo, interesse, prioridades e dúvidas sem transformar em interrogatório.']],quiz:{q:'Um bom diagnóstico serve para:',o:['Acumular perguntas','Personalizar a conversa com base em prioridades reais','Acelerar sem ouvir'],a:1}},
{id:'liner-4',title:'Apresentação com Valor',desc:'Transforme características em benefícios que façam sentido para aquele casal.',xp:500,lessons:[
['liner-4.1','Benefício antes de característica','Explique primeiro por que algo importa; depois mostre como funciona.'],
['liner-4.2','Storytelling objetivo','Use exemplos curtos e verdadeiros para facilitar entendimento, sem exagerar resultados.'],
['liner-4.3','Prova e personalização','Conecte evidências e informações verificáveis às prioridades levantadas no diagnóstico.']],quiz:{q:'Ao apresentar valor, o ideal é:',o:['Listar todas as características','Conectar benefícios às prioridades do casal','Usar promessas fortes'],a:1}},
{id:'liner-5',title:'Objeções e Construção de Desejo',desc:'Trate dúvidas como informação e preserve confiança.',xp:550,lessons:[
['liner-5.1','Objeção como informação','Pergunte o que está por trás da dúvida antes de responder.'],
['liner-5.2','Reforce valor sem confronto','Mostre o ponto relevante com evidência e sem tentar vencer uma discussão.'],
['liner-5.3','Mantenha desejo e segurança','Dê espaço para perguntas e não esconda limitações ou condições.']],quiz:{q:'Uma objeção deve ser tratada como:',o:['Ataque pessoal','Informação sobre uma dúvida ou risco percebido','Motivo para pressionar'],a:1}},
{id:'liner-6',title:'Passagem de Bastão para o Closer',desc:'Entregue ao Closer contexto, confiança e direção.',xp:600,lessons:[
['liner-6.1','Resumo estratégico','Resuma prioridades, pontos de interesse e dúvidas sem expor informações desnecessárias.'],
['liner-6.2','Sinalize pontos quentes','Destaque o que teve maior valor para o casal e o que ainda precisa de esclarecimento.'],
['liner-6.3','Transição de confiança','Apresente o Closer como continuidade natural da experiência, sem promessas de resultado.']],quiz:{q:'Uma boa passagem de bastão deve:',o:['Recomeçar tudo do zero','Levar contexto e continuidade para o Closer','Criar urgência artificial'],a:1}}
],
closer:[
{id:'closer-1',title:'Mentalidade de Fechamento',desc:'Direção, calma e responsabilidade em momentos de decisão.',xp:300,lessons:[
['closer-1.1','Postura de decisão','Conduza com clareza sem dominar a conversa. O cliente precisa entender e decidir com segurança.'],
['closer-1.2','Controle emocional','Não trate objeções como rejeição pessoal. Mantenha tom, ritmo e atenção.'],
['closer-1.3','Ritmo e direção','Organize a conversa em etapas e evite atropelar dúvidas importantes.']],quiz:{q:'A postura correta do Closer é:',o:['Pressionar até o sim','Conduzir com clareza e respeitar a decisão','Evitar perguntas difíceis'],a:1}},
{id:'closer-2',title:'Diagnóstico de Decisão',desc:'Entenda como o casal decide antes de apresentar uma proposta.',xp:400,lessons:[
['closer-2.1','Retome o diagnóstico','Confirme o que já foi entendido e atualize pontos que possam ter mudado.'],
['closer-2.2','Critérios de decisão','Pergunte quais fatores pesam mais para uma decisão segura.'],
['closer-2.3','Identifique o decisor','Inclua todos os participantes da decisão e evite criar conflito entre eles.']],quiz:{q:'Antes da proposta, o Closer deve:',o:['Assumir o que importa','Confirmar critérios e participantes da decisão','Falar de preço imediatamente'],a:1}},
{id:'closer-3',title:'Construção de Valor',desc:'Organize valor percebido antes de discutir condições.',xp:450,lessons:[
['closer-3.1','Valor percebido','Conecte a solução ao que foi identificado como importante, sem inventar benefícios.'],
['closer-3.2','Ancoragem responsável','Contextualize preço e condições com transparência, sem comparação enganosa.'],
['closer-3.3','Conexão com prioridade','Retome as prioridades do casal e verifique se a solução realmente atende.']],quiz:{q:'Valor percebido cresce quando:',o:['Há mais pressão','A proposta se conecta a prioridades reais','O preço fica escondido'],a:1}},
{id:'closer-4',title:'Tratamento de Objeções',desc:'Isole a objeção real e responda com clareza.',xp:500,lessons:[
['closer-4.1','Isole a objeção real','Pergunte se existe outro ponto além da dúvida apresentada.'],
['closer-4.2','Responda com evidência','Use informações verificáveis e condições reais. Não improvise garantias.'],
['closer-4.3','Confirme entendimento','Depois de responder, pergunte se a dúvida foi resolvida antes de avançar.']],quiz:{q:'Após responder uma objeção, faça o quê?',o:['Mude de assunto','Confirme se a dúvida foi resolvida','Repita a proposta mais alto'],a:1}},
{id:'closer-5',title:'Proposta e Negociação',desc:'Apresente condições com objetividade e preserve valor.',xp:550,lessons:[
['closer-5.1','Apresente a proposta','Explique preço, condições, prazos e responsabilidades sem esconder informação material.'],
['closer-5.2','Negocie sem perder valor','Conceda apenas o que é autorizado e relevante. Não crie falsas limitações.'],
['closer-5.3','Peça a decisão com clareza','Depois de esclarecer tudo, pergunte de forma direta se o casal deseja seguir.']],quiz:{q:'Negociação saudável significa:',o:['Criar escassez falsa','Trabalhar condições reais e autorizadas','Esconder detalhes até o final'],a:1}},
{id:'closer-6',title:'Fechamento e Pós-Decisão',desc:'Formalize o aceite e proteja a experiência depois do sim.',xp:600,lessons:[
['closer-6.1','Formalize o aceite','Garanta que o cliente compreendeu termos e condições antes da confirmação.'],
['closer-6.2','Reforce segurança','Resuma os pontos principais e indique onde consultar informações e suporte.'],
['closer-6.3','Próximos passos e pós-venda','Explique o que acontecerá a seguir e como o cliente pode pedir ajuda ou esclarecer dúvidas.']],quiz:{q:'Depois do sim, a prioridade é:',o:['Encerrar rápido','Garantir entendimento e próximos passos claros','Adicionar novas condições'],a:1}}
]};


const ADVANCED_CHECKS={"captador":[[["Qual comportamento demonstra consistência profissional?",["Acompanhar indicadores e ajustar a execução","Medir apenas a sorte do dia","Abandonar o processo após recusas"],0],["Para melhorar abordagem, é útil: ",["Repetir frases sem observar respostas","Praticar diferentes aberturas respeitosas","Omitir o objetivo da conversa"],1]],[["Se o visitante diz que não deseja conversar, você deve:",["Persistir até convencê-lo","Insistir com outro profissional","Agradecer e liberar a passagem"],2],["Uma boa pergunta inicial deve ser:",["Curta, relevante e respeitosa","Exigir dados financeiros","Incluir promessas não verificadas"],0]],[["Na qualificação, informações de perfil devem ser:",["Estimadas para agilizar","Confirmadas conforme critérios autorizados","Preenchidas mesmo sem resposta"],1],["Se houver dúvida sobre um critério interno, faça:",["Mudança por conta própria","O encaminhamento sem checagem","Confirmação com o responsável"],2]],[["Quando o casal tem dúvida sobre a experiência, o melhor é:",["Explicar o que é verificável","Desviar da dúvida","Reduzir artificialmente a duração"],0],["Quando alguém afirma que precisa sair, você deve:",["Questionar sua decisão repetidamente","Respeitar o limite comunicado","Criar um benefício inexistente"],1]],[["Uma transição adequada entre profissionais deve:",["Ocultar as objeções recebidas","Alterar o acordo inicial","Manter consistentes as informações dadas"],2],["Qual informação reduz desencontros?",["Tempo e próximos passos confirmados","Uma promessa de compra garantida","Condições inventadas pelo captador"],0]],[["Uma análise de turno deve comparar:",["Só as vendas de outras equipes","Volume, qualidade e encaminhamento","Apenas a quantidade de turistas"],1],["Depois de notar uma objeção frequente, faça:",["Insista mais","Oculte o problema","Treine uma resposta verdadeira e respeitosa"],2]]],"liner":[[["Para criar confiança, é adequado:",["Explicar o processo antes da apresentação","Esconder o tempo estimado","Prometer vantagens desconhecidas"],0],["Quando há atraso no atendimento, o correto é:",["Ocultar a situação","Dar informação realista e atualizada","Pressionar para continuar"],1]],[["Qual pergunta abre espaço para entender interesses?",["Uma pergunta que só aceita sim","Uma pergunta que pressupõe compra","Uma pergunta aberta sobre a viagem"],2],["Ao ouvir uma prioridade, você pode:",["Reformular para confirmar entendimento","Trocar de assunto","Presumir que já existe decisão"],0]],[["Um diagnóstico de qualidade evita:",["Confirmar preferências","Perguntas invasivas sem necessidade","Escutar dúvidas"],1],["Quando um casal muda sua prioridade, é correto:",["Manter a informação antiga","Ignorar um dos participantes","Atualizar o diagnóstico"],2]],[["Um benefício deve ser apresentado com:",["Base em informação comprovável","Garantia inventada","Condição oculta"],0],["Se o cliente pede prova de uma afirmação, você deve:",["Apresentar fonte ou verificar","Insistir que confie cegamente","Desviar do assunto"],0]],[["Quando surge preocupação com custos, o liner deve:",["Desconsiderá-la","Reconhecer e encaminhar esclarecimento","Omitir condições"],1],["Uma objeção pode indicar:",["Falha moral do cliente","Rejeição definitiva obrigatória","Uma dúvida que merece investigação"],2]],[["O resumo ao Closer deve apresentar:",["Preferências reais e pontos não resolvidos","Afirmações que o casal não fez","Pressão para dar resposta imediata"],0],["Informações sensíveis devem ser:",["Compartilhadas com qualquer pessoa","Tratadas conforme necessidade e autorização","Exibidas no ranking"],1]]],"closer":[[["Um fechamento responsável exige:",["Transparência e decisão voluntária","Pressão psicológica","Promessa de retorno garantido"],0],["Se o cliente recusa a proposta:",["Insistir sem limite","Respeitar a recusa","Ameaçar perda indevida"],1]],[["Na análise da decisão do casal, convém:",["Ouvir só um participante","Presumir capacidade financeira","Considerar todos os decisores"],2],["Quando há divergência entre o casal, o adequado é:",["Dar espaço para conversa e esclarecimento","Apoiar apenas quem quer comprar","Apresentar urgência fictícia"],0]],[["Uma apresentação equilibrada inclui:",["Só vantagens","Benefícios e limitações verificáveis","Omissão de custos"],1],["Uma projeção sem base não deve ser:",["Questionada","Verificada","Apresentada como certeza"],2]],[["Ao ouvir 'está caro', você deve:",["Investigar o significado e as prioridades","Reduzir valores sem autorização","Desqualificar a preocupação"],0],["A resposta a uma dúvida contratual precisa ser:",["Rápida mesmo que inventada","Fundamentada nas condições reais","Substituída por apelo emocional"],1]],[["Antes de oferecer um desconto, confirme:",["Só a reação do cliente","A opinião de outra equipe","A autorização e regras reais"],2],["Qual é uma forma transparente de proposta?",["Expor valores totais e condições materiais","Mencionar apenas a parcela","Esconder taxas até o aceite"],0]],[["No aceite, qual conduta protege a experiência?",["Evitar leitura de termos","Confirmar entendimento antes de formalizar","Acrescentar cobranças depois"],1],["Após finalizar o atendimento, você deve:",["Ignorar dúvidas posteriores","Excluir os registros necessários","Orientar sobre canais e próximos passos"],2]]]};
const FIELD_PRACTICES={
captador:[
'Antes do turno, defina um objetivo de abordagens e observe o fluxo no PARK ou na EXTERNA. Não confunda quantidade de abordagens com casais qualificados.',
'Em dupla, pratique uma abertura de até 20 segundos. A outra pessoa deve poder recusar sem constrangimento.',
'Faça uma simulação de qualificação usando apenas os critérios oficiais vigentes. Nunca invente perfil, renda ou respostas.',
'Simule as objeções “sem tempo” e “não tenho interesse”. Ouça, esclareça e aceite a decisão do visitante.',
'Explique o encaminhamento para a sala, incluindo o que o casal pode esperar e o tempo informado pela operação.',
'No fim do turno, anote oportunidades, abordagens, casais encaminhados e um comportamento para melhorar amanhã.'
],
liner:[
'Faça uma recepção simulada: apresente-se, explique a jornada e confirme as expectativas de tempo.',
'Em dupla, pratique três perguntas abertas e um resumo do que ouviu, sem interromper o casal.',
'Construa um diagnóstico sobre objetivos e prioridades, sem solicitar dados que não sejam necessários.',
'Escolha uma característica real da experiência e traduza em benefício relevante, sem criar promessas.',
'Simule uma dúvida difícil e pratique dizer “vou confirmar essa informação” quando necessário.',
'Prepare uma passagem de bastão que registre interesse, prioridades e dúvidas relevantes ao Closer.'
],
closer:[
'Pratique pedir uma decisão sem pressionar, deixando espaço para o cliente recusar.',
'Faça um exercício de escuta das duas pessoas do casal, sem presumir quem decide.',
'Explique um exemplo de proposta com benefícios e limitações verificáveis; não crie preço ou condição.',
'Simule a pergunta “precisamos pensar” e investigue o que falta esclarecer, sem falsa urgência.',
'Revise uma proposta de treinamento e identifique preço, prazo, encargos e condições de cancelamento.',
'Simule a formalização: peça ao cliente para resumir o que entendeu e apresente os canais de suporte.'
]
};
const KNOWLEDGE_CHECKS={
captador:[
['Qual métrica ajuda a avaliar o processo do captador?',['Abordagens e encaminhamentos qualificados','Apenas o número de visitantes da cidade','Apenas o VGV da sala'],0],
['Qual atitude respeita a liberdade do visitante?',['Bloquear a passagem','Aceitar a recusa sem insistência','Seguir o visitante até ele aceitar'],1],
['Se um casal não atende aos critérios reais de perfil, o correto é:',['Alterar o cadastro','Ignorar a diferença','Registrar corretamente e não qualificá-lo'],2],
['Diante da objeção “sem tempo”, você deve:',['Esclarecer duração real e respeitar a decisão','Prometer uma duração que não conhece','Criar pressão para impedir a saída'],0],
['Uma passagem de bastão confiável inclui:',['Promessas extras','O que foi efetivamente combinado','Condições comerciais inventadas'],1],
['Após o turno, qual prática favorece a evolução?',['Ignorar os resultados','Mudar tudo sem analisar','Revisar indicadores e escolher melhoria concreta'],2]
],
liner:[
['No início do atendimento, qual a prioridade?',['Criar confiança e alinhar a experiência','Pedir decisão de compra','Evitar explicar o processo'],0],
['O que demonstra escuta ativa?',['Interromper a resposta','Confirmar o entendimento com o casal','Seguir roteiro sem adaptar'],1],
['Um diagnóstico útil identifica:',['A opinião do profissional','Suposições sem confirmação','Necessidades e prioridades reais do casal'],2],
['Uma apresentação responsável usa:',['Informações verificáveis e relevantes','Promessas não autorizadas','Somente argumentos emocionais'],0],
['Quando não sabe uma condição, você deve:',['Inventar uma resposta','Verificar antes de afirmar','Omitir a dúvida'],1],
['Na transição ao Closer, o mais importante é:',['Reiniciar toda a conversa','Ocultar dúvidas pendentes','Transmitir o contexto de modo fiel'],2]
],
closer:[
['A postura adequada ao pedir decisão é:',['Ser claro e respeitar a escolha','Criar ameaça fictícia','Impedir que o casal converse'],0],
['Quem deve participar de uma decisão conjunta?',['Só quem fala mais','Todos os envolvidos na decisão','Só quem parece ter maior renda'],1],
['Qual prática mantém transparência sobre valor?',['Ocultar condições','Usar uma comparação fictícia','Explicar benefícios e limitações reais'],2],
['Depois de responder a uma objeção, o próximo passo é:',['Verificar se a dúvida foi esclarecida','Aumentar o tom de voz','Mudar o assunto'],0],
['Uma concessão comercial deve ser:',['Inventada para fechar','Real e autorizada','Prometida sem registro'],1],
['Depois do aceite, é essencial:',['Encerrar sem documentos','Acrescentar condições','Confirmar entendimento e próximos passos'],2]
]};
function moduleQuestions(m){
  const [track,number]=m.id.split('-'),extra=KNOWLEDGE_CHECKS[track]?.[Number(number)-1];
  const cases=ADVANCED_CHECKS[track]?.[Number(number)-1]||[];
  const original=[m.quiz,...(extra?[{q:extra[0],o:extra[1],a:extra[2]}]:[]),...cases.map(x=>({q:x[0],o:x[1],a:x[2]}))];
  // Revisão interdisciplinar da mesma função: 10 perguntas distintas por prova.
  const review=ADVANCED_CHECKS[track].flatMap((group,i)=>i===Number(number)-1?[]:group.map(x=>({q:x[0],o:x[1],a:x[2]})));
  const seen=new Set(original.map(q=>q.q.trim()));
  const questions=[...original];
  for(const q of review){if(questions.length>=10)break;if(!seen.has(q.q.trim())){questions.push(q);seen.add(q.q.trim());}}
  return questions;
}
let currentExam=null;
function displayExam(){
  if(!currentExam)return;
  const {m,questions,index,answers}=currentExam,q=questions[index];
  quizContent.innerHTML=`<div class="quiz-status">AVALIAÇÃO • ${trackLabel(S.profile.track).toUpperCase()} • ${index+1}/${questions.length}</div>
    <div class="progress-track"><div class="progress-bar" style="width:${Math.round(index/questions.length*100)}%"></div></div>
    <h2>${safe(q.q)}</h2>
    ${q.o.map((o,i)=>`<button class="answer-btn" onclick="answerQuiz('${m.id}',${i})">${String.fromCharCode(65+i)}. ${safe(o)}</button>`).join('')}
    <p>Nota mínima: 70%. A prova inclui revisão de conteúdos da mesma função. Respostas são registradas após a conclusão.</p>
    <button class="ghost-btn" onclick="quizDialog.close()">Fechar</button>`;
}

const SCENARIOS=[
{track:'captador',q:'O casal responde: “Estamos com pressa, só estamos passeando.”',answers:[['Entendo. Em 20 segundos eu explico e vocês decidem se faz sentido.',true],['Então vocês não têm interesse nenhum?',false],['Mas vocês precisam parar para me ouvir.',false]],tip:'Valide a pressa e peça um microespaço de tempo. O objetivo é reduzir resistência, não confrontar.'},
{track:'captador',q:'A pessoa diz: “Não quero comprar nada.”',answers:[['Perfeito. Posso só explicar rapidamente a experiência e vocês decidem se faz sentido?',true],['Mas eu nem falei o preço ainda!',false],['Se não quer comprar, deixa pra lá.',false]],tip:'Esclareça a intenção e preserve leveza. Não discuta com a objeção.'},
{track:'captador',q:'O casal continua andando enquanto você fala.',answers:[['Acompanhar mantendo distância adequada e fazer uma pergunta curta.',true],['Segurar a pessoa pelo braço.',false],['Falar mais alto.',false]],tip:'Respeite o espaço físico. Contato físico não deve ser usado para impedir alguém de seguir.'},
{track:'liner',q:'O casal responde com frases curtas e parece desconectado.',answers:[['Reduzir o ritmo e fazer uma pergunta aberta sobre o que é relevante para eles.',true],['Acelerar toda a apresentação.',false],['Ignorar e seguir o roteiro.',false]],tip:'Baixo engajamento pede leitura e adaptação, não mais volume de informação.'},
{track:'liner',q:'Você percebe que uma informação passada antes pode estar incorreta.',answers:[['Corrigir com transparência e confirmar a informação certa.',true],['Manter a versão para não perder confiança.',false],['Evitar o tema.',false]],tip:'Transparência protege a confiança e evita promessas inconsistentes.'},
{track:'closer',q:'O casal diz: “Precisamos pensar.”',answers:[['Claro. O que vocês gostariam de avaliar melhor antes de decidir?',true],['Se sair agora, perde tudo.',false],['Então não faz sentido continuar.',false]],tip:'Descubra o que precisa ser analisado sem criar urgência artificial.'},
{track:'closer',q:'O cliente pergunta uma condição que você não tem autorização para oferecer.',answers:[['Explicar o limite e verificar com o responsável se existe alternativa autorizada.',true],['Prometer e resolver depois.',false],['Dizer que sim sem registrar.',false]],tip:'Nunca prometa condição não autorizada.'}
];

const cfg=window.CAPTA_CONFIG;
const db=window.supabase?.createClient(cfg.supabaseUrl,cfg.supabasePublishableKey,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}});
const app=document.querySelector('#app');
const quizDialog=document.querySelector('#quizDialog');
const quizContent=document.querySelector('#quizContent');
const toastEl=document.querySelector('#toast');
const profileBtn=document.querySelector('#profileBtn');
const managerBtn=document.querySelector('#managerBtn');
const cloudBadge=document.querySelector('#cloudBadge');
let deferredPrompt=null;
let authMode='login';

let S={
  session:null,user:null,profile:null,isManager:false,isSupervisor:false,
  progress:new Set(),quiz:{},sim:{hits:0,total:0},
  leaderboard:[],certificates:[]
};

const safe=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
const firstName=()=>S.profile?.display_name?.trim().split(/\s+/)[0]||'Profissional';
const initials=()=>S.profile?.display_name?.trim().split(/\s+/).slice(0,2).map(x=>x[0]).join('').toUpperCase()||'CA';
const trackLabel=t=>TRACK_LABELS[t]||t;
const modules=()=>COURSES[S.profile?.track||'captador']||COURSES.captador;
const toast=(msg,type='')=>{toastEl.textContent=msg;toastEl.className=`toast show ${type}`;setTimeout(()=>toastEl.className='toast',3200);};
const setBusy=(btn,on,label='Processando...')=>{if(!btn)return; if(on){btn.dataset.old=btn.textContent;btn.disabled=true;btn.textContent=label;}else{btn.disabled=false;btn.textContent=btn.dataset.old||btn.textContent;}};

function setNav(route){
  document.querySelectorAll('[data-nav]').forEach(a=>a.classList.toggle('active',a.dataset.nav===route));
  profileBtn.textContent=initials();
  managerBtn.hidden=!(S.isManager||S.isSupervisor);
  cloudBadge.hidden=!S.session;
}

function allLessons(m){return m.lessons.length}
function lessonDone(key){return S.progress.has(key)}
function moduleLessonProgress(m){return Math.round(m.lessons.filter(l=>lessonDone(l[0])).length/allLessons(m)*100)}
function quizPassed(m){return (S.quiz[m.id]?.score||0)>=70}
function moduleComplete(m){return moduleLessonProgress(m)===100&&quizPassed(m)}
function isUnlocked(m){
  const list=modules(),i=list.findIndex(x=>x.id===m.id);
  return i===0||moduleComplete(list[i-1]);
}
function totals(){
  const list=modules(),lessonTotal=list.reduce((n,m)=>n+m.lessons.length,0);
  const done=list.reduce((n,m)=>n+m.lessons.filter(l=>lessonDone(l[0])).length,0);
  const quizzes=list.filter(quizPassed).length;
  const xp=done*75+list.filter(quizPassed).reduce((n,m)=>n+m.xp,0);
  return {lessonTotal,done,quizzes,xp,pct:lessonTotal?Math.round(done/lessonTotal*100):0,modulesDone:list.filter(moduleComplete).length};
}
function currentLeaderboardRow(){return S.leaderboard.find(x=>x.user_id===S.user?.id)}
function route(){return (location.hash||'#home').slice(1)}

function authScreen(message=''){
  document.body.classList.add('auth-mode');
  managerBtn.hidden=true;cloudBadge.hidden=true;
  const signup=authMode==='signup';
  app.innerHTML=`<section class="auth-page">
    <div class="auth-glow one"></div><div class="auth-glow two"></div>
    <div class="auth-card">
      <div class="auth-brand"><span class="brand-mark big">C</span><div><b>CAPTA EVOLVE</b><small>EDUCAÇÃO E EVOLUÇÃO PROFISSIONAL</small></div></div>
      <div class="eyebrow">UNIVERSIDADE INTERNA</div>
      <h1>${signup?'Crie seu acesso':'Entre na sua jornada'}</h1>
      <p>${signup?'Seu progresso, XP, ranking e certificados ficam salvos na nuvem.':'Continue exatamente de onde parou, em qualquer dispositivo.'}</p>
      ${message?`<div class="notice">${safe(message)}</div>`:''}
      <form id="authForm" class="auth-form">
        ${signup?`<label>Nome completo<input name="name" required maxlength="80" autocomplete="name" placeholder="Seu nome" /></label>
        <label>Trilha inicial<select name="track"><option value="captador">Captador</option><option value="liner">Liner</option><option value="closer">Closer</option></select></label>`:''}
        <label>E-mail<input name="email" type="email" required autocomplete="email" placeholder="voce@empresa.com" /></label>
        <label>Senha<input name="password" type="password" required minlength="6" autocomplete="${signup?'new-password':'current-password'}" placeholder="••••••••" /></label>
        <button class="primary-btn auth-submit" type="submit">${signup?'Criar conta':'Entrar'}</button>
      </form>
      <button id="toggleAuth" class="link-btn">${signup?'Já tenho conta':'Criar meu acesso'}</button>
      <div class="auth-foot"><span>🔒 Dados protegidos por login</span><span>☁ Progresso em nuvem</span><span>🏆 Ranking da equipe</span></div>
    </div>
  </section>`;
  document.querySelector('#toggleAuth').onclick=()=>{authMode=signup?'login':'signup';authScreen();};
  document.querySelector('#authForm').onsubmit=handleAuth;
}

async function handleAuth(e){
  e.preventDefault();
  const f=new FormData(e.currentTarget),btn=e.currentTarget.querySelector('button[type=submit]');
  const email=String(f.get('email')).trim(),password=String(f.get('password'));
  setBusy(btn,true,authMode==='signup'?'Criando...':'Entrando...');
  try{
    if(authMode==='signup'){
      const name=String(f.get('name')).trim(),track=String(f.get('track'));
      const {data,error}=await db.auth.signUp({email,password,options:{data:{name,track}}});
      if(error)throw error;
      if(!data.session){authMode='login';authScreen('Conta criada. Confira seu e-mail para confirmar o cadastro e depois entre.');return;}
    }else{
      const {error}=await db.auth.signInWithPassword({email,password});
      if(error)throw error;
    }
  }catch(err){toast(err.message||'Não foi possível entrar.','error');setBusy(btn,false);}
}

async function ensureProfile(){
  const {data,error}=await db.from('capta_academy_profiles').select('*').eq('id',S.user.id).maybeSingle();
  if(error)throw error;
  if(data){S.profile=data;return;}
  const meta=S.user.user_metadata||{};
  const payload={id:S.user.id,display_name:(meta.name||S.user.email?.split('@')[0]||'Profissional').slice(0,80),track:['captador','liner','closer'].includes(meta.track)?meta.track:'captador'};
  const r=await db.from('capta_academy_profiles').insert(payload).select().single();
  if(r.error)throw r.error;
  S.profile=r.data;
}

async function migrateLegacy(){
  if(S.profile.track!=='captador'||localStorage.getItem('captaAcademyCloudMigratedV2'))return;
  let old={};try{old=JSON.parse(localStorage.getItem('captaAcademyStateV1')||'{}')}catch{}
  const rows=(old.completed||[]).map(k=>{
    const m=String(k).match(/^(\d+)-(\d+\.\d+)$/); if(!m)return null;
    return {user_id:S.user.id,lesson_key:`captador-${m[2]}`,module_key:`captador-${m[1]}`,track:'captador'};
  }).filter(Boolean);
  if(rows.length)await db.from('capta_academy_progress').upsert(rows,{onConflict:'user_id,lesson_key',ignoreDuplicates:true});
  for(const [mid,score] of Object.entries(old.quizScores||{})){
    await db.from('capta_academy_quiz_results').upsert({user_id:S.user.id,module_key:`captador-${mid}`,track:'captador',score:Number(score)||0,attempts:1,passed_at:Number(score)>=70?new Date().toISOString():null},{onConflict:'user_id,module_key'});
  }
  if((old.simTotal||0)>0)await db.from('capta_academy_sim_results').upsert({user_id:S.user.id,hits:old.simHits||0,total:old.simTotal||0},{onConflict:'user_id'});
  localStorage.setItem('captaAcademyCloudMigratedV2','1');
}

async function loadData(){
  await ensureProfile();
  await migrateLegacy();
  const [pr,qz,sim,lb,mgr,cert,supervisor]=await Promise.all([
    db.from('capta_academy_progress').select('lesson_key,module_key,track').eq('user_id',S.user.id),
    db.from('capta_academy_quiz_results').select('*').eq('user_id',S.user.id),
    db.from('capta_academy_sim_results').select('*').eq('user_id',S.user.id).maybeSingle(),
    db.from('capta_academy_leaderboard').select('*').order('xp',{ascending:false}).limit(100),
    db.from('capta_academy_managers').select('email').maybeSingle(),
    db.from('capta_academy_certificates').select('*').eq('user_id',S.user.id).order('issued_at',{ascending:false}),
    db.from('capta_academy_supervisors').select('room').eq('user_id',S.user.id).maybeSingle()
  ]);
  for(const r of [pr,qz,sim,lb,mgr,cert,supervisor])if(r.error)throw r.error;
  S.progress=new Set((pr.data||[]).map(x=>x.lesson_key));
  S.quiz=Object.fromEntries((qz.data||[]).map(x=>[x.module_key,x]));
  S.sim=sim.data||{hits:0,total:0};
  S.leaderboard=lb.data||[];
  S.isManager=!!mgr.data;
  S.isSupervisor=!!supervisor.data;
  S.supervisedRoom=supervisor.data?.room||null;
  S.certificates=cert.data||[];
}

async function bootSession(session){
  S.session=session;S.user=session?.user||null;
  if(!session){S={session:null,user:null,profile:null,isManager:false,isSupervisor:false,progress:new Set(),quiz:{},sim:{hits:0,total:0},leaderboard:[],certificates:[]};authScreen();return;}
  document.body.classList.remove('auth-mode');
  app.innerHTML=`<div class="loader"><div class="spinner"></div><strong>Sincronizando sua jornada...</strong></div>`;
  try{await loadData();renderRoute();}catch(err){console.error(err);authScreen('Não foi possível carregar seus dados. Tente entrar novamente.');}
}

function moduleCard(m){
  const p=moduleLessonProgress(m),open=isUnlocked(m),done=moduleComplete(m);
  return `<article class="card module-card ${open?'':'locked'} ${done?'complete':''}">
    <div><div class="module-num">MÓDULO ${m.id.split('-')[1].padStart(2,'0')} ${done?'• CONCLUÍDO':open?'':'• BLOQUEADO'}</div>
    <h3>${safe(m.title)}</h3><p>${safe(m.desc)}</p></div>
    <div><div class="module-meta"><span class="pill">${m.lessons.length} aulas</span><span class="pill">+${m.xp} XP</span><span class="pill">${p}% aulas</span></div>
    <div class="progress-track"><div class="progress-bar" style="width:${p}%"></div></div>
    ${open?`<button class="${done?'ghost-btn':'secondary-btn'}" onclick="location.hash='modulo-${m.id}'">${done?'Revisar':p?'Continuar':'Começar'}</button>`:'<button class="secondary-btn" disabled>Conclua aulas + quiz anterior</button>'}</div>
  </article>`;
}

function home(){
  setNav('home');
  const t=totals(),list=modules(),next=list.find(m=>isUnlocked(m)&&!moduleComplete(m))||list.at(-1),row=currentLeaderboardRow();
  const pos=S.leaderboard.findIndex(x=>x.user_id===S.user.id)+1;
  app.innerHTML=`<section class="hero hero-dashboard">
    <div><div class="eyebrow">${trackLabel(S.profile.track).toUpperCase()} • TRILHA ATIVA</div>
    <h1>Aprenda. Pratique. Evolua.</h1>
    <p>${safe(firstName())}, desenvolva suas habilidades em captação e vendas com aulas, práticas, simulações e conhecimento aplicado.</p>
    <div class="hero-actions"><button class="primary-btn" onclick="location.hash='modulo-${next.id}'">Continuar treinamento</button><button class="secondary-btn" onclick="location.hash='simulador'">Treinar cenário</button></div></div>
    <div class="level-orb"><small>NÍVEL</small><strong>${Math.max(1,Math.floor(t.xp/1200)+1)}</strong><span>${t.xp.toLocaleString('pt-BR')} XP</span></div>
  </section>
  <section class="stats">
    <div class="stat-card"><small>Progresso</small><strong>${t.pct}%</strong><span>${t.done}/${t.lessonTotal} aulas</span></div>
    <div class="stat-card"><small>XP</small><strong>${t.xp.toLocaleString('pt-BR')}</strong><span>calculado na nuvem</span></div>
    <div class="stat-card"><small>Ranking</small><strong>${pos?`#${pos}`:'—'}</strong><span>${row?.quizzes_passed||0} quizzes aprovados</span></div>
    <div class="stat-card"><small>Simulador</small><strong>${S.sim.total?Math.round(S.sim.hits/S.sim.total*100):0}%</strong><span>${S.sim.hits||0}/${S.sim.total||0} decisões corretas</span></div>
  </section>
  <section class="card certificate-teaser" style="margin-bottom:16px"><div><div class="cert-icon">▶</div><div><strong>Biblioteca de videoaulas</strong><p>Roteiros, conteúdos por função e vídeos publicados pela gestão.</p></div></div><a href="#videoaulas" class="primary-btn">Acessar aulas</a></section>
  <section class="card certificate-teaser"><div><div class="cert-icon">◎</div><div><strong>Laboratório de Campo</strong><p>Novos treinamentos interativos para praticar situações reais.</p></div></div><a href="#laboratorio" class="primary-btn">Começar</a></section>
  <div class="section-head"><div><h2>Conhecimento para evoluir</h2><p>Referência rápida de captação, atendimento e vendas. Regras e campanhas devem ser confirmadas com a gestão.</p></div></div>
  <section class="grid operational-grid">
    <article class="card"><div class="eyebrow">01 • CAPTAÇÃO</div><h3>Abordagem e experiência</h3><p>Identifique oportunidades, apresente o convite com clareza, respeite o cliente e explique a experiência sem promessas indevidas.</p><a href="#trilhas" class="secondary-btn">Trilha de captação</a></article>
    <article class="card"><div class="eyebrow">02 • QUALIFICAÇÃO</div><h3>Perfil e agendamento</h3><p>Confirme os critérios vigentes, registre dados verdadeiros e assegure entendimento sobre horário, local e condições do atendimento.</p><a href="#trilhas" class="secondary-btn">Praticar qualificação</a></article>
    <article class="card"><div class="eyebrow">03 • LINER</div><h3>Recepção e diagnóstico</h3><p>Faça a passagem de informações, investigue interesses, apresente benefícios adequados e esclareça dúvidas com transparência.</p><a href="#trilhas" class="secondary-btn">Trilhas profissionais</a></article>
    <article class="card"><div class="eyebrow">04 • CLOSER</div><h3>Proposta e fechamento</h3><p>Explique preço, condições, obrigações e cancelamento; confirme a decisão consciente e a documentação correta.</p><a href="#simulador" class="secondary-btn">Simular objeções</a></article>
    <article class="card"><div class="eyebrow">05 • GESTÃO</div><h3>Rotina de resultados</h3><p>Acompanhe atendimentos, qualificação, conversão e qualidade do processo. Registre oportunidades de melhoria sem alterar dados históricos.</p><a href="#ranking" class="secondary-btn">Acompanhar evolução</a></article>
    <article class="card"><div class="eyebrow">06 • CAPACITAÇÃO</div><h3>Aprender e certificar</h3><p>Continue aulas, exercícios, simulados, conquistas e certificações específicas de captadores, liners e closers.</p><a href="#trilhas" class="secondary-btn">Ver treinamentos</a></article>
  </section>
  <div class="section-head"><div><h2>Próximas etapas</h2><p>O próximo módulo só abre depois das aulas e do quiz.</p></div><a href="#trilhas">Ver tudo</a></div>
  <section class="grid">${list.slice(0,3).map(moduleCard).join('')}</section>
  <div class="section-head"><div><h2>Seu certificado</h2><p>Conclua a trilha ativa para liberar a emissão.</p></div></div>
  <section class="card certificate-teaser"><div><span class="cert-icon">✦</span><div><strong>Certificação ${trackLabel(S.profile.track)}</strong><p>${t.modulesDone}/${list.length} módulos validados.</p></div></div><button class="secondary-btn" onclick="location.hash='certificado'">${S.certificates.some(c=>c.track===S.profile.track)?'Ver certificado':'Ver requisitos'}</button></section>`;
}

function trilhas(){
  setNav('trilhas');
  const t=totals();
  app.innerHTML=`<section class="hero compact"><div class="eyebrow">JORNADA PROFISSIONAL</div><h1>Trilha de ${trackLabel(S.profile.track)}</h1><p>${TRACK_SUBTITLES[S.profile.track]}. São ${modules().length} módulos e ${t.lessonTotal} aulas.</p></section>
  <div class="track-switcher">${Object.keys(TRACK_LABELS).map(k=>`<button class="${S.profile.track===k?'active':''}" onclick="switchTrack('${k}')"><b>${TRACK_LABELS[k]}</b><small>${TRACK_SUBTITLES[k]}</small></button>`).join('')}</div>
  <section class="grid">${modules().map(moduleCard).join('')}</section><section class="card certificate-teaser" style="margin-top:20px"><div><div class="cert-icon">▶</div><div><strong>Biblioteca de videoaulas</strong><p>Roteiros por função com vídeos disponibilizados pela gestão.</p></div></div><a href="#videoaulas" class="primary-btn">Abrir biblioteca</a></section><section class="card certificate-teaser" style="margin-top:20px"><div><div class="cert-icon">◎</div><div><strong>Treino prático</strong><p>Situações reais, protocolos e desafios interativos.</p></div></div><a href="#laboratorio" class="primary-btn">Abrir laboratório</a></section>`;
}

function moduleView(key){
  const m=modules().find(x=>x.id===key);
  if(!m){location.hash='trilhas';return;}
  setNav('trilhas');
  if(!isUnlocked(m)){app.innerHTML='<div class="empty">🔒 Conclua as aulas e o quiz do módulo anterior para desbloquear esta etapa.</div>';return;}
  const p=moduleLessonProgress(m),passed=quizPassed(m);
  app.innerHTML=`<section class="hero compact"><div class="eyebrow">${trackLabel(S.profile.track).toUpperCase()} • MÓDULO ${m.id.split('-')[1]}</div><h1>${safe(m.title)}</h1><p>${safe(m.desc)}</p>
  <div class="module-meta"><span class="pill">${p}% aulas</span><span class="pill">${passed?'Quiz aprovado':'Quiz pendente'}</span><span class="pill">+${m.xp} XP</span></div></section>
  <div class="section-head"><div><h2>Aulas</h2><p>Leia o conteúdo e registre sua conclusão.</p></div></div>
  <section class="lesson-list">${m.lessons.map((l,i)=>`<article class="card lesson ${lessonDone(l[0])?'done':''}">
    <div class="lesson-icon">${lessonDone(l[0])?'✓':String(i+1).padStart(2,'0')}</div>
    <div><strong>${safe(l[1])}</strong><p>${safe(l[2])}</p><div class="practice-note"><strong>Aplicação no campo</strong><p>${safe(FIELD_PRACTICES[S.profile.track]?.[Number(m.id.split('-')[1])-1]||'Pratique este conceito com seu líder.')}</p><p><strong>Atividade:</strong> Reescreva com suas palavras como aplicaria o aprendizado no seu próximo atendimento e só então marque a aula como concluída.</p></div></div>
    <button class="${lessonDone(l[0])?'ghost-btn':'secondary-btn'}" onclick="completeLesson('${m.id}','${l[0]}')" ${lessonDone(l[0])?'disabled':''}>${lessonDone(l[0])?'Concluída':'Concluir aula'}</button>
  </article>`).join('')}</section>
  <div class="section-head"><div><h2>Validação</h2><p>Aprovação mínima: 70%.</p></div></div>
  <section class="card quiz-card"><div class="lesson-icon">${passed?'✓':'?'}</div><div><strong>Quiz do módulo</strong><p>${passed?'Aprovado. Você já garantiu o XP deste módulo.':p<100?'Conclua as três aulas para liberar o quiz.':`Acertando, você recebe +${m.xp} XP.`}</p></div><button class="primary-btn" onclick="openQuiz('${m.id}')" ${p<100?'disabled':''}>${passed?'Refazer quiz':'Iniciar quiz'}</button></section>`;
}

async function completeLesson(moduleKey,lessonKey){
  const m=modules().find(x=>x.id===moduleKey);if(!m||lessonDone(lessonKey))return;
  S.progress.add(lessonKey);moduleView(moduleKey);
  const {error}=await db.from('capta_academy_progress').insert({user_id:S.user.id,lesson_key:lessonKey,module_key:moduleKey,track:S.profile.track});
  if(error){S.progress.delete(lessonKey);toast('Não foi possível salvar a aula.','error');moduleView(moduleKey);return;}
  toast('+75 XP • Aula salva na nuvem','success');
  await refreshLeaderboard();
}


function openQuiz(moduleKey){
 const m=modules().find(x=>x.id===moduleKey);if(!m)return;
 currentExam={m,questions:moduleQuestions(m),index:0,answers:[]};
 displayExam();if(!quizDialog.open)quizDialog.showModal();
}
async function answerQuiz(moduleKey,index){
 const e=currentExam;if(!e||e.m.id!==moduleKey)return;
 e.answers.push(index);e.index++;
 if(e.index<e.questions.length){displayExam();return;}
 const m=e.m,correct=e.questions.filter((q,i)=>q.a===e.answers[i]).length;
 const rawScore=Math.round(correct/e.questions.length*100),ok=rawScore>=70;
 const prev=S.quiz[moduleKey],attempts=(prev?.attempts||0)+1;
 const score=Math.max(rawScore,prev?.score||0);
 const payload={user_id:S.user.id,module_key:moduleKey,track:S.profile.track,score,attempts,passed_at:ok?(prev?.passed_at||new Date().toISOString()):prev?.passed_at||null,updated_at:new Date().toISOString()};
 const {error}=await db.from('capta_academy_quiz_results').upsert(payload,{onConflict:'user_id,module_key'});
 if(error){toast('Erro ao registrar avaliação.','error');return;}
 S.quiz[moduleKey]=payload;
 quizContent.innerHTML=`<div class="quiz-status">RESULTADO DA AVALIAÇÃO</div><h2>${rawScore}% de aproveitamento</h2>
 <p>Você acertou ${correct} de ${e.questions.length} questões. ${ok?'Aprovado!':'Revise as aulas e tente novamente.'}</p>
 <p>Nota mínima: 70%. ${prev?.score>=70?'Sua aprovação anterior foi preservada.':''}</p>
 <button class="primary-btn" onclick="quizDialog.close();location.hash='trilhas'">Voltar à trilha</button>
 <button class="secondary-btn" onclick="openQuiz('${m.id}')">Refazer avaliação</button>`;
 if(ok)await refreshLeaderboard();
}
async function refreshLeaderboard(){
  const r=await db.from('capta_academy_leaderboard').select('*').order('xp',{ascending:false}).limit(100);
  if(!r.error)S.leaderboard=r.data||[];
}

function simulador(){
  setNav('simulador');
  const pool=SCENARIOS.filter(s=>s.track===S.profile.track),s=pool[Math.floor(Math.random()*pool.length)]||SCENARIOS[0];
  window.__scenario=s;
  app.innerHTML=`<section class="hero compact"><div class="eyebrow">SIMULADOR DE CAMPO</div><h1>Decida em segundos.</h1><p>Treine cenários reais da função de ${trackLabel(S.profile.track)}. O objetivo é praticar escolhas profissionais, claras e respeitosas.</p></section>
  <section class="sim-stage card"><div class="sim-kicker">CENÁRIO</div><h2>${safe(s.q)}</h2><div class="answer-stack">${s.answers.map((a,i)=>`<button onclick="answerScenario(${i})"><span>${String.fromCharCode(65+i)}</span>${safe(a[0])}</button>`).join('')}</div><div id="simFeedback"></div></section>
  <section class="stats mini"><div class="stat-card"><small>Acertos</small><strong>${S.sim.hits||0}</strong></div><div class="stat-card"><small>Tentativas</small><strong>${S.sim.total||0}</strong></div><div class="stat-card"><small>Precisão</small><strong>${S.sim.total?Math.round(S.sim.hits/S.sim.total*100):0}%</strong></div></section>`;
}

async function answerScenario(i){
  const s=window.__scenario;if(!s)return;
  const ok=!!s.answers[i][1],hits=(S.sim.hits||0)+(ok?1:0),total=(S.sim.total||0)+1;
  S.sim={hits,total};
  document.querySelector('#simFeedback').innerHTML=`<div class="feedback ${ok?'ok':'no'}"><strong>${ok?'Boa decisão.':'Melhor opção disponível:'}</strong><p>${safe(s.tip)}</p><button class="secondary-btn" onclick="simulador()">Próximo cenário</button></div>`;
  const {error}=await db.from('capta_academy_sim_results').upsert({user_id:S.user.id,hits,total,updated_at:new Date().toISOString()},{onConflict:'user_id'});
  if(error)toast('Resultado não sincronizado.','error');
}

function ranking(){
  setNav('ranking');
  const filter=window.__rankTrack||'all',rows=S.leaderboard.filter(x=>filter==='all'||x.track===filter).slice(0,30),me=S.leaderboard.find(x=>x.user_id===S.user.id),myPos=S.leaderboard.findIndex(x=>x.user_id===S.user.id)+1;
  app.innerHTML=`<section class="hero compact"><div class="eyebrow">RANKING AO VIVO</div><h1>Performance que aparece.</h1><p>XP vem de aulas concluídas e quizzes aprovados. O ranking é recalculado pelo banco.</p></section>
  <section class="my-rank card"><div><small>SUA POSIÇÃO GERAL</small><strong>${myPos?`#${myPos}`:'—'}</strong></div><div><small>SEU XP</small><strong>${(me?.xp||totals().xp).toLocaleString('pt-BR')}</strong></div><div><small>TRILHA</small><strong>${trackLabel(S.profile.track)}</strong></div></section>
  <div class="rank-filters"><button class="${filter==='all'?'active':''}" onclick="setRankFilter('all')">Geral</button>${Object.keys(TRACK_LABELS).map(k=>`<button class="${filter===k?'active':''}" onclick="setRankFilter('${k}')">${TRACK_LABELS[k]}</button>`).join('')}</div>
  <section class="leaderboard">${rows.length?rows.map((r,i)=>`<div class="rank-row ${r.user_id===S.user.id?'me':''}"><div class="rank-pos">${i<3?['🥇','🥈','🥉'][i]:`#${i+1}`}</div><div class="rank-avatar">${safe((r.display_name||'P').split(/\s+/).slice(0,2).map(x=>x[0]).join('').toUpperCase())}</div><div class="rank-name"><strong>${safe(r.display_name)}</strong><span>${trackLabel(r.track)} • ${r.lessons_completed} aulas</span></div><div class="rank-xp"><strong>${Number(r.xp).toLocaleString('pt-BR')}</strong><small>XP</small></div></div>`).join(''):'<div class="empty">Ainda não há profissionais neste filtro.</div>'}</section>`;
}

function perfil(){
  setNav('perfil');
  const t=totals(),cert=S.certificates.find(c=>c.track===S.profile.track);
  const level=t.modulesDone>=6?'Ouro':t.modulesDone>=4?'Prata':t.modulesDone>=2?'Bronze':'Em formação';
  app.innerHTML=`<section class="profile-hero card"><div class="profile-avatar">${initials()}</div><div><div class="eyebrow">${trackLabel(S.profile.track).toUpperCase()}</div><h1>${safe(S.profile.display_name)}</h1><p>${safe(S.user.email)}</p></div></section>
  <section class="stats mini"><div class="stat-card"><small>XP</small><strong>${t.xp.toLocaleString('pt-BR')}</strong></div><div class="stat-card"><small>Aulas</small><strong>${t.done}</strong></div><div class="stat-card"><small>Módulos</small><strong>${t.modulesDone}/${modules().length}</strong></div></section>
  <section class="card certificate-teaser"><div><div class="cert-icon">✦</div><div><strong>Nível de aprendizagem: ${level}</strong><p>Bronze: 2 módulos • Prata: 4 módulos • Ouro: 6 módulos completos. Distintivo de progresso, não certificado oficial.</p></div></div><a href="#certificado" class="secondary-btn">Ver certificação</a></section>
  <section class="card certificate-teaser" style="margin-top:14px"><div><div class="cert-icon">✦</div><div><strong>Certificação por níveis</strong><p>Emita certificados Bronze, Prata e Ouro após cumprir os requisitos de cada etapa.</p></div></div><a href="#niveis" class="primary-btn">Meus níveis</a></section>
  <div class="section-head"><div><h2>Configurações</h2><p>Seu nome e trilha podem ser alterados a qualquer momento.</p></div></div>
  <form id="profileForm" class="card form-card"><label>Nome<input name="name" value="${safe(S.profile.display_name)}" required maxlength="80" /></label><label>Trilha atual<select name="track">${Object.keys(TRACK_LABELS).map(k=>`<option value="${k}" ${S.profile.track===k?'selected':''}>${TRACK_LABELS[k]}</option>`).join('')}</select></label><button class="primary-btn">Salvar alterações</button></form>
  <section class="card action-list"><button onclick="location.hash='certificado'"><span>✦</span><div><strong>${cert?'Meu certificado':'Certificação'}</strong><small>${cert?'Certificado emitido':'Veja os requisitos da trilha'}</small></div><b>›</b></button>${(S.isManager||S.isSupervisor)?`<button onclick="location.hash='gestor'"><span>▦</span><div><strong>Painel do Gestor</strong><small>Acompanhe equipe e progresso</small></div><b>›</b></button>`:''}<button class="danger-action" onclick="logout()"><span>↪</span><div><strong>Sair da conta</strong><small>Seu progresso continuará salvo</small></div><b>›</b></button></section>`;
  document.querySelector('#profileForm').onsubmit=saveProfile;
}

async function saveProfile(e){
  e.preventDefault();const f=new FormData(e.currentTarget),btn=e.currentTarget.querySelector('button');
  const display_name=String(f.get('name')).trim(),track=String(f.get('track'));setBusy(btn,true,'Salvando...');
  const {data,error}=await db.from('capta_academy_profiles').update({display_name,track,updated_at:new Date().toISOString()}).eq('id',S.user.id).select().single();
  if(error){toast(error.message,'error');setBusy(btn,false);return;}
  S.profile=data;await loadData();toast('Perfil atualizado.','success');perfil();
}

async function switchTrack(track){
  if(!TRACK_LABELS[track]||track===S.profile.track)return;
  const {data,error}=await db.from('capta_academy_profiles').update({track,updated_at:new Date().toISOString()}).eq('id',S.user.id).select().single();
  if(error){toast('Não foi possível trocar de trilha.','error');return;}
  S.profile=data;await loadData();toast(`Trilha ${trackLabel(track)} ativada.`,'success');trilhas();
}

function certificado(){
  setNav('');
  const t=totals(),cert=S.certificates.find(c=>c.track===S.profile.track),ready=t.modulesDone===modules().length;
  if(cert){
    const date=new Date(cert.issued_at).toLocaleDateString('pt-BR',{day:'2-digit',month:'long',year:'numeric'});
    app.innerHTML=`<section class="certificate-page"><div class="certificate card">
      <div class="cert-top"><span class="brand-mark big">C</span><div><b>CAPTA EVOLVE</b><small>CERTIFICADO DIGITAL</small></div></div>
      <div class="cert-seal">✦</div><p class="cert-label">CERTIFICAMOS QUE</p><h1>${safe(S.profile.display_name)}</h1>
      <p>concluiu integralmente a trilha profissional de</p><h2>${trackLabel(cert.track).toUpperCase()}</h2>
      <p class="cert-desc">${TRACK_SUBTITLES[cert.track]}, com aulas, avaliações e prática em simulador.</p>
      <div class="cert-footer"><div><small>EMITIDO EM</small><strong>${date}</strong></div><div><small>CÓDIGO DE VALIDAÇÃO</small><strong>${safe(cert.certificate_code)}</strong></div></div>
    </div><div class="cert-actions"><button class="secondary-btn" onclick="location.hash='perfil'">Voltar</button><button class="primary-btn" onclick="window.print()">Imprimir / Salvar PDF</button></div></section>`;
  }else{
    app.innerHTML=`<section class="hero compact"><div class="eyebrow">CERTIFICAÇÃO</div><h1>Certificação ${trackLabel(S.profile.track)}</h1><p>O certificado é liberado somente quando todas as aulas e todos os quizzes da trilha estiverem concluídos.</p></section>
    <section class="card requirements"><div class="req ${t.done===t.lessonTotal?'done':''}"><span>${t.done===t.lessonTotal?'✓':'○'}</span><div><strong>Todas as aulas</strong><small>${t.done}/${t.lessonTotal} concluídas</small></div></div><div class="req ${t.quizzes===modules().length?'done':''}"><span>${t.quizzes===modules().length?'✓':'○'}</span><div><strong>Todos os quizzes</strong><small>${t.quizzes}/${modules().length} aprovados</small></div></div><div class="req"><span>✦</span><div><strong>XP da trilha</strong><small>${t.xp.toLocaleString('pt-BR')} XP acumulados</small></div></div></section>
    <div class="cert-actions"><button class="secondary-btn" onclick="location.hash='trilhas'">Continuar treinando</button><button class="primary-btn" onclick="issueCertificate()" ${ready?'':'disabled'}>Emitir certificado</button></div>`;
  }
}

async function issueCertificate(){
  const {error}=await db.rpc('capta_academy_issue_certificate',{p_track:S.profile.track});
  if(error){toast(error.message.includes('track_not_completed')?'Finalize a trilha antes de emitir.':'Não foi possível emitir o certificado.','error');return;}
  const r=await db.from('capta_academy_certificates').select('*').eq('user_id',S.user.id).order('issued_at',{ascending:false});if(!r.error)S.certificates=r.data||[];
  toast('Certificado emitido!','success');certificado();
}

async function gestor(){
  if(!S.isManager){location.hash='home';return;}
  setNav('');
  app.innerHTML=`<div class="loader"><div class="spinner"></div><strong>Carregando painel da equipe...</strong></div>`;
  const [profiles,leader,certs]=await Promise.all([
    db.from('capta_academy_profiles').select('*'),
    db.from('capta_academy_leaderboard').select('*').order('xp',{ascending:false}),
    db.from('capta_academy_certificates').select('user_id,track,issued_at')
  ]);
  if(profiles.error||leader.error||certs.error){app.innerHTML='<div class="empty">Não foi possível carregar o painel do gestor.</div>';return;}
  const ps=profiles.data||[],lb=leader.data||[],cs=certs.data||[];
  const avg=lb.length?Math.round(lb.reduce((n,x)=>n+Number(x.xp||0),0)/lb.length):0;
  const byUser=new Map(lb.map(r=>[r.user_id,r]));
  const rows=ps.map(p=>({p,r:byUser.get(p.id)||null})).sort((a,b)=>Number(a.r?.xp||0)-Number(b.r?.xp||0));
  const noStart=rows.filter(v=>!Number(v.r?.lessons_completed||0)).length;
  const lowProgress=rows.filter(v=>Number(v.r?.lessons_completed||0)>0&&Number(v.r?.quizzes_passed||0)<2).length;
  const certified=new Set(cs.map(c=>c.user_id)).size;
  const status=v=>!Number(v.r?.lessons_completed||0)?'Não iniciou':Number(v.r?.quizzes_passed||0)<2?'Precisa acompanhamento':Number(v.r?.quizzes_passed||0)>=6?'Trilha avançada':'Em evolução';
  app.innerHTML=`<section class="hero compact manager-hero"><div class="eyebrow">CAPTA EVOLVE • GESTÃO DE APRENDIZAGEM</div><h1>Painel de desenvolvimento</h1><p>Visão de acompanhamento com os dados autorizados da plataforma. Identifique quem precisa de apoio e acompanhe certificações.</p></section>
  <section class="stats"><div class="stat-card"><small>Profissionais</small><strong>${ps.length}</strong></div><div class="stat-card"><small>Ainda não iniciaram</small><strong>${noStart}</strong></div><div class="stat-card"><small>Precisam de apoio</small><strong>${lowProgress}</strong></div><div class="stat-card"><small>Certificados emitidos</small><strong>${cs.length}</strong></div></section>
  <section class="card certificate-teaser"><div><div class="cert-icon">◎</div><div><strong>Indicadores de aprendizagem</strong><p>XP médio: ${avg.toLocaleString('pt-BR')} • ${lb.reduce((n,x)=>n+Number(x.quizzes_passed||0),0)} provas aprovadas • ${certified} profissionais certificados</p></div></div><button class="secondary-btn" onclick="gestor()">Atualizar painel</button></section>
  <div class="section-head"><div><h2>Acompanhamento individual</h2><p>Profissionais com menor avanço aparecem primeiro. Status calculado a partir de aulas e quizzes registrados.</p></div></div>
  <section class="manager-table card"><div class="table-head" style="grid-template-columns:1.6fr .75fr .7fr .7fr 1.2fr"><span>Profissional</span><span>Trilha</span><span>Aulas</span><span>Provas</span><span>Situação</span></div>
  ${rows.map(v=>`<div class="table-row" style="grid-template-columns:1.6fr .75fr .7fr .7fr 1.2fr"><span><strong>${safe(v.p.display_name||v.r?.display_name||'Profissional')}</strong></span><span>${safe(trackLabel(v.p.track))}</span><span>${Number(v.r?.lessons_completed||0)}</span><span>${Number(v.r?.quizzes_passed||0)}</span><span>${status(v)}</span></div>`).join('')||'<div class="empty">Nenhum profissional cadastrado.</div>'}</section>
  <div class="section-head"><div><h2>Distribuição da equipe</h2><p>Trilhas cadastradas: Captador, Liner e Closer.</p></div></div><section class="track-cards">${Object.keys(TRACK_LABELS).map(k=>`<div class="card"><small>${TRACK_LABELS[k]}</small><strong>${ps.filter(p=>p.track===k).length}</strong><span>profissionais</span></div>`).join('')}</section>
  <section class="card certificate-teaser" style="margin-top:18px"><div><div class="cert-icon">▤</div><div><strong>RAIO X + CAPTA EVOLVE</strong><p>Compare os indicadores comerciais do mês com o histórico de aprendizagem disponível.</p></div></div><a href="#raiox" class="primary-btn">Comparar resultados</a></section>
  <div class="section-head"><div><h2>Gestão das salas e lideranças</h2><p>Vincule contas já cadastradas à sala e conceda supervisão somente aos líderes autorizados.</p></div></div>
  <form id="roomAssignment" class="card form-card" style="grid-template-columns:1.5fr 1fr 1fr auto"><label>E-mail da conta<input type="email" name="email" placeholder="profissional@empresa.com" required></label><label>Sala<select name="room"><option>DREAM HOUSE</option><option>ROMANTIC</option></select></label><label>Tipo<select name="type"><option value="member">Profissional</option><option value="leader">Líder</option></select></label><button class="primary-btn" type="submit">Autorizar</button></form>
  <div class="section-head"><div><h2>Publicação de videoaulas</h2><p>Vincule vídeos do YouTube ou Vimeo aos roteiros existentes. Sem vídeo publicado, o roteiro continua disponível.</p></div></div>
  <form id="videoManage" class="card form-card" style="grid-template-columns:1.2fr 2fr auto"><label>Aula<select name="video_id" required><option value="vid-capta-01">Captador • Primeira abordagem</option><option value="vid-capta-02">Captador • Qualificação</option><option value="vid-liner-01">Liner • Rapport</option><option value="vid-liner-02">Liner • Diagnóstico</option><option value="vid-closer-01">Closer • Negociação</option><option value="vid-closer-02">Closer • Pós-venda</option></select></label><label>URL do vídeo (YouTube/Vimeo)<input type="url" name="video_url" placeholder="https://www.youtube.com/watch?v=..." required></label><button class="primary-btn" type="submit">Publicar</button></form>
  <div class="notice">O acesso de líderes exige conta cadastrada e atribuição explícita. Os indicadores mostram progresso registrado, não frequência de acesso.</div>`;
  document.getElementById('videoManage').onsubmit=editVideoUrl;
  document.getElementById('roomAssignment').onsubmit=assignRoom;
}



async function certificadosNivel(){
 setNav('perfil');app.innerHTML='<div class="loader"><div class="spinner"></div><strong>Consultando suas certificações...</strong></div>';
 const {data,error}=await db.from('capta_academy_level_certificates').select('*').eq('user_id',S.user.id).eq('track',S.profile.track);
 if(error){app.innerHTML='<div class="empty">Não foi possível consultar certificados.</div>';return}
 const done=totals().modulesDone,certs=data||[];
 const levels=[['Bronze',2],['Prata',4],['Ouro',6]];
 app.innerHTML=`<section class="hero compact"><div class="eyebrow">CAPTA EVOLVE • CERTIFICAÇÕES</div><h1>Seus níveis de evolução</h1><p>Certificações emitidas pelo servidor conforme módulos e avaliações aprovadas. Os certificados oficiais da trilha permanecem disponíveis separadamente.</p></section>
 <section class="grid">${levels.map(([level,n])=>{const cert=certs.find(x=>x.level===level);return `<article class="card module-card"><div><div class="module-num">NÍVEL ${level.toUpperCase()}</div><h3>${level}</h3><p>Concluir pelo menos ${n} módulos, com todas as aulas e avaliações aprovadas.</p><div class="module-meta"><span class="pill">${done}/${n} módulos</span><span class="pill">${cert?'Certificado emitido':done>=n?'Pronto para validar':'Em andamento'}</span></div>${cert?`<p>Código: <strong>${safe(cert.certificate_code)}</strong></p>`:''}</div><button class="primary-btn" onclick="${cert?`printLevelCert('${level}')`:`issueLevel('${level}')`}" ${!cert&&done<n?'disabled':''}>${cert?'Ver / imprimir':'Solicitar certificado'}</button></article>`}).join('')}</section>
 <section class="card certificate-teaser" style="margin-top:20px"><div><div class="cert-icon">✦</div><div><strong>Certificação completa</strong><p>Conclua todos os módulos para emitir também seu certificado de trilha.</p></div></div><a href="#certificado" class="secondary-btn">Certificado final</a></section>`;
}
async function issueLevel(level){
 const {error}=await db.rpc('capta_academy_issue_level',{p_track:S.profile.track,p_level:level});
 if(error){toast(String(error.message).includes('level_not_completed')?'Requisitos ainda não cumpridos.':'Não foi possível emitir o certificado.','error');return}
 toast('Certificado '+level+' emitido!','success');certificadosNivel();
}
async function printLevelCert(level){
 const {data,error}=await db.from('capta_academy_level_certificates').select('*').eq('user_id',S.user.id).eq('track',S.profile.track).eq('level',level).maybeSingle();
 if(error||!data){toast('Certificado não encontrado.','error');return}
 setNav('perfil');
 app.innerHTML=`<section class="certificate-page"><div class="certificate card"><div class="cert-top"><span class="brand-mark big">C</span><div><b>CAPTA EVOLVE</b><small>UNIVERSIDADE CORPORATIVA</small></div></div><div class="cert-seal">✦</div><p class="cert-label">CERTIFICADO DE EVOLUÇÃO</p><h1>${safe(S.profile.display_name)}</h1><p>Concluiu os requisitos de formação do nível</p><h2>${safe(level.toUpperCase())}</h2><p>Trilha: ${safe(trackLabel(data.track))}</p><div class="cert-footer"><div><small>EMISSÃO</small><strong>${new Date(data.issued_at).toLocaleDateString('pt-BR')}</strong></div><div><small>CÓDIGO</small><strong>${safe(data.certificate_code)}</strong></div></div></div><div class="cert-actions"><a href="#niveis" class="secondary-btn">Voltar</a><button class="primary-btn" onclick="window.print()">Imprimir / salvar PDF</button></div></section>`;
}


async function raioxCompare(month='2026-11-01'){
 if(!S.isManager){location.hash='home';return}
 setNav('');app.innerHTML='<div class="loader"><div class="spinner"></div><strong>Consultando indicadores do RAIO X...</strong></div>';
 const {data,error}=await db.rpc('capta_academy_raiox_compare',{p_month:month});
 if(error){app.innerHTML='<div class="empty">Não foi possível consultar o RAIO X com sua conta.</div>';return}
 const rows=data||[],linked=rows.filter(r=>r.academy_name!=null);
 const totalCouples=rows.reduce((n,r)=>n+Number(r.couples||0),0);
 const totalSales=rows.reduce((n,r)=>n+Number(r.sales||0),0);
 const totalVgv=rows.reduce((n,r)=>n+Number(r.vgv||0),0);
 app.innerHTML=`<section class="hero compact"><div class="eyebrow">CAPTA EVOLVE + RAIO X</div><h1>Performance e aprendizado</h1><p>Comparativo de dados comerciais registrados no RAIO X com a evolução dos treinamentos. O vínculo entre sistemas é autorizado manualmente pelo gestor para evitar associações incorretas.</p><div class="hero-actions"><a class="secondary-btn" href="#gestor">Voltar à gestão</a><a class="secondary-btn" href="https://aureon-tech.github.io/RAIO-X/" target="_blank" rel="noopener noreferrer">Abrir RAIO X</a></div></section>
 <section class="card" style="padding:18px"><label style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">Mês <select id="raioxMonth" style="background:#0b1727;color:#fff;padding:12px;border-radius:10px;border:1px solid rgba(255,255,255,.2)"><option value="2026-11-01" ${month==='2026-11-01'?'selected':''}>Novembro/2026</option><option value="2026-10-01" ${month==='2026-10-01'?'selected':''}>Outubro/2026</option><option value="2026-09-01" ${month==='2026-09-01'?'selected':''}>Setembro/2026</option></select></label></section>
 <section class="stats"><div class="stat-card"><small>Registros RAIO X</small><strong>${rows.length}</strong></div><div class="stat-card"><small>Casais</small><strong>${totalCouples.toLocaleString('pt-BR')}</strong></div><div class="stat-card"><small>Vendas</small><strong>${totalSales.toLocaleString('pt-BR')}</strong></div><div class="stat-card"><small>VGV informado</small><strong>${totalVgv.toLocaleString('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:0})}</strong></div></section>
 <div class="notice">Contas vinculadas pela gestão: ${linked.length}/${rows.length}. “Sem vínculo” não significa que o profissional não treinou; significa que o gestor ainda não vinculou a conta correspondente. Valores de VGV refletem a origem RAIO X, sem ajuste de cancelamentos nesta tela.</div>
 <div class="section-head"><div><h2>Vincular profissional à Academia</h2><p>Informe o e-mail da conta CAPTA EVOLVE e o nome exato usado no RAIO X.</p></div></div>
 <form id="raioxLinkForm" class="card form-card" style="grid-template-columns:1.5fr 1.5fr auto"><label>E-mail no CAPTA EVOLVE<input type="email" name="email" placeholder="profissional@empresa.com" required></label><label>Nome profissional no RAIO X<input type="text" name="professional" maxlength="120" required placeholder="Nome como aparece no RAIO X"></label><button type="submit" class="primary-btn">Vincular</button></form>
 <div class="section-head"><div><h2>Comparativo individual</h2><p>Dados da competência selecionada e totais de aulas/provas aprovadas no CAPTA EVOLVE.</p></div></div>
 <section class="manager-table card"><div class="table-head" style="grid-template-columns:2fr .7fr .7fr .9fr 1fr"><span>Profissional</span><span>Casais</span><span>Vendas</span><span>VGV</span><span>Treinamento</span></div>
 ${rows.map(r=>`<div class="table-row" style="grid-template-columns:2fr .7fr .7fr .9fr 1fr"><span>${safe(r.professional_name)}<small style="display:block;color:#91a6bc">${safe(r.role||'')}</small></span><span>${Number(r.couples||0)}</span><span>${Number(r.sales||0)}</span><span>${Number(r.vgv||0).toLocaleString('pt-BR',{maximumFractionDigits:0})}</span><span>${r.academy_name!=null?Number(r.lessons_completed)+' aulas / '+Number(r.quizzes_passed)+' provas':'Sem vínculo'}</span></div>`).join('')||'<div class="empty">Sem dados para este mês.</div>'}</section>`;
 document.getElementById('raioxMonth').onchange=e=>raioxCompare(e.target.value);
 document.getElementById('raioxLinkForm').onsubmit=async e=>{
  e.preventDefault();const f=new FormData(e.currentTarget),btn=e.currentTarget.querySelector('button');
  setBusy(btn,true,'Vinculando...');
  const {error}=await db.rpc('capta_academy_link_raiox',{p_email:String(f.get('email')).trim(),p_professional_name:String(f.get('professional')).trim()});
  setBusy(btn,false);
  if(error){toast(String(error.message).includes('account_not_found')?'Conta não cadastrada no CAPTA EVOLVE.':String(error.message).includes('raiox_professional_not_found')?'Nome não encontrado no RAIO X.':'Vínculo não autorizado ou já utilizado.','error');return}
  toast('Vínculo confirmado.','success');raioxCompare(month);
 };
}

async function supervisorPanel(){
 if(!S.isSupervisor&&!S.isManager){location.hash='home';return}
 setNav('');app.innerHTML='<div class="loader"><div class="spinner"></div><strong>Carregando sua equipe...</strong></div>';
 const {data,error}=await db.rpc('capta_academy_room_report');
 if(error){app.innerHTML='<div class="empty">Acesso aos dados não autorizado ou indisponível.</div>';return}
 const list=(data||[]).filter(v=>S.isManager||v.room===S.supervisedRoom);
 const total=list.length,started=list.filter(v=>Number(v.lessons_completed)>0).length;
 app.innerHTML=`<section class="hero compact"><div class="eyebrow">CAPTA EVOLVE • PAINEL DE LIDERANÇA</div><h1>${safe(S.supervisedRoom||'Equipes')}</h1><p>Desenvolvimento dos profissionais vinculados à sua sala. Os dados só aparecem após a atribuição autorizada pelo gestor.</p></section>
 <section class="stats mini"><div class="stat-card"><small>Profissionais</small><strong>${total}</strong></div><div class="stat-card"><small>Começaram</small><strong>${started}</strong></div><div class="stat-card"><small>Aguardam início</small><strong>${total-started}</strong></div></section>
 <div class="section-head"><div><h2>Desenvolvimento da equipe</h2><p>Aulas e avaliações aprovadas.</p></div></div>
 <section class="manager-table card"><div class="table-head" style="grid-template-columns:2fr 1fr 1fr 1fr 1fr"><span>Profissional</span><span>Função</span><span>Aulas</span><span>Provas</span><span>Nota média</span></div>
 ${list.map(v=>`<div class="table-row" style="grid-template-columns:2fr 1fr 1fr 1fr 1fr"><span>${safe(v.display_name)}</span><span>${safe(trackLabel(v.track))}</span><span>${Number(v.lessons_completed)}</span><span>${Number(v.quizzes_passed)}</span><span>${v.avg_score==null?'—':Number(v.avg_score)+'%'}</span></div>`).join('')||'<div class="empty">Nenhum profissional foi atribuído a esta sala ainda.</div>'}</section>`;
}
async function assignRoom(e){
 e.preventDefault();if(!S.isManager)return;
 const f=new FormData(e.currentTarget),btn=e.currentTarget.querySelector('button');
 const email=String(f.get('email')||'').trim(),room=String(f.get('room')||''),leader=String(f.get('type'))==='leader';
 setBusy(btn,true,'Atribuindo...');
 const {error}=await db.rpc('capta_academy_assign_room',{p_email:email,p_room:room,p_as_leader:leader});
 setBusy(btn,false);
 toast(error?(String(error.message).includes('account_not_found')?'Conta não encontrada. A pessoa precisa criar acesso primeiro.':'Não foi possível atribuir. Verifique permissões.'):'Atribuição salva com sucesso.',error?'error':'success');
 if(!error)e.currentTarget.reset();
}

function setRankFilter(k){window.__rankTrack=k;ranking();}
async function logout(){await db.auth.signOut();location.hash='home';}
window.completeLesson=completeLesson;window.openQuiz=openQuiz;window.answerQuiz=answerQuiz;window.answerScenario=answerScenario;window.setRankFilter=setRankFilter;window.switchTrack=switchTrack;window.issueCertificate=issueCertificate;window.logout=logout;window.simulador=simulador;

function renderRoute(){
  if(!S.session){authScreen();return;}
  document.body.classList.remove('auth-mode');
  const r=route();
  if(r==='home'||!r)home();
  else if(r==='trilhas')trilhas();
  else if(r.startsWith('modulo-'))moduleView(r.replace('modulo-',''));
  else if(r==='simulador')simulador();
  else if(r==='laboratorio')laboratorio();
  else if(r==='videoaulas')videoAulas();
  else if(r==='ranking')ranking();
  else if(r==='perfil')perfil();
  else if(r==='certificado')certificado();
  else if(r==='niveis')certificadosNivel();
  else if(r==='raiox')S.isManager?raioxCompare():home();
  else if(r==='gestor')S.isManager?gestor():S.isSupervisor?supervisorPanel():home();
  else home();
}

profileBtn.onclick=()=>location.hash='perfil';
managerBtn.onclick=()=>location.hash='gestor';
window.addEventListener('hashchange',renderRoute);
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;document.querySelector('#installBtn').hidden=false;});
document.querySelector('#installBtn').onclick=async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;document.querySelector('#installBtn').hidden=true;};
if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));

(async()=>{
  if(!db){authScreen('Falha ao carregar a conexão segura. Atualize a página.');return;}
  const {data}=await db.auth.getSession();
  await bootSession(data.session);
  db.auth.onAuthStateChange((event,session)=>{
    if(event==='SIGNED_IN'&&session&&session.user.id!==S.user?.id)setTimeout(()=>bootSession(session),0);
    if(event==='SIGNED_OUT')setTimeout(()=>bootSession(null),0);
  });
})();
