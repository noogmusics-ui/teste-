import {
  Check,
  ChevronDown,
  Heart,
  BookOpen,
  Frown,
  AlertTriangle,
  ArrowDown,
  Pencil,
} from 'lucide-react';
import TopActivityBar from './components/TopActivityBar';
import PurchaseNotifications from './components/PurchaseNotifications';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <TopActivityBar />
      <PurchaseNotifications />
      <div className="max-w-lg mx-auto px-6 py-12 pt-24 sm:pt-28">
        {/* Hero Image Section */}
        <div className="relative mb-8">
          <img
            src="https://i.postimg.cc/XN28Hss3/imagem-de-cima-principal.png"
            alt="Kit de Grafismo Fonético"
            className="w-full h-auto"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        {/* Main Heading */}
        <div className="text-center mb-6 px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-700 leading-tight mb-2">
            Descubra a
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight mb-1">
            <span className="text-amber-600"> técnica americana que </span>
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight">
            <span className="text-amber-600"> ensina as crianças a ler </span>{' '}
            <span className="text-gray-700">até</span>
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            5 vezes mais rápido <span className="text-gray-700 font-medium">, sem</span>
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-700">pressão!</h2>
        </div>

        {/* Subheading */}
        <div className="text-center mb-8 px-4">
          <p className="text-base sm:text-lg text-gray-400">
            Com apenas <span className="font-bold text-gray-600">10 minutos</span> por dia.
          </p>
        </div>

        {/* Benefits */}
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl p-6 sm:p-8 space-y-4 sm:space-y-5 mx-4 mb-8">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-amber-700 rounded-full flex items-center justify-center mt-0.5">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={3} />
            </div>
            <p className="text-amber-800 font-medium leading-relaxed text-left text-sm sm:text-base">
              Ideal para crianças de 2 a 12 anos, no ritmo natural de cada uma
            </p>
          </div>
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-amber-700 rounded-full flex items-center justify-center mt-0.5">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={3} />
            </div>
            <p className="text-amber-800 font-medium leading-relaxed text-left text-sm sm:text-base">
              Mesmo que ainda não reconheça letras ou sons
            </p>
          </div>
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-amber-700 rounded-full flex items-center justify-center mt-0.5">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={3} />
            </div>
            <p className="text-amber-800 font-medium leading-relaxed text-left text-sm sm:text-base">
              Funciona também com crianças com TDAH, Autismo ou dificuldades de foco
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="px-4 mb-10">
          <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-base sm:text-lg py-4 sm:py-5 px-6 sm:px-8 rounded-full shadow-xl transform transition hover:scale-105">
            Quero meu pequeno lendo rápido!
          </button>
        </div>

        {/* Down Arrow */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-col items-center">
            <ChevronDown className="w-8 h-8 text-amber-600" strokeWidth={3} />
            <ChevronDown className="w-8 h-8 text-amber-600 -mt-4" strokeWidth={3} />
          </div>
        </div>

        {/* Problem Statement */}
        <div className="text-center px-4 mb-8">
          <h3 className="text-xl sm:text-2xl font-medium text-gray-800 mb-2">Muitos pais acham que</h3>
          <p className="text-xl sm:text-2xl font-medium mb-2">
            <span className="bg-amber-100 text-amber-700 px-2 py-1">
              {' '}
              "cada criança tem seu tempo pra ler".
            </span>
          </p>
          <p className="text-xl sm:text-2xl font-medium text-gray-800">Até que...</p>
        </div>

        {/* Problems List */}
        <div className="px-4 space-y-4 mb-8">
          <div className="border-2 border-dashed border-red-300 rounded-2xl p-5 bg-red-50">
            <div className="flex items-start gap-3">
              <Heart className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-red-700 font-medium text-base sm:text-lg leading-relaxed">
                As tarefas de leitura viram um sofrimento
              </p>
            </div>
          </div>
          <div className="border-2 border-dashed border-red-300 rounded-2xl p-5 bg-red-50">
            <div className="flex items-start gap-3">
              <BookOpen className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-red-700 font-medium text-base sm:text-lg leading-relaxed">As notas baixas</p>
            </div>
          </div>
          <div className="border-2 border-dashed border-red-300 rounded-2xl p-5 bg-red-50">
            <div className="flex items-start gap-3">
              <Frown className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-red-700 font-medium text-base sm:text-lg leading-relaxed">
                Ela se sente "menos inteligente" do que os coleguinhas
              </p>
            </div>
          </div>
        </div>

        {/* Warning Text */}
        <div className="px-4 mb-8">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-lg">
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
              <span className="text-amber-700 font-bold">E o pior:</span> Começa a achar que não é capaz, sem
              entender o porquê..
            </p>
          </div>
        </div>

        {/* Down Arrow 2 */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full p-3 shadow-md">
            <ChevronDown className="w-8 h-8 text-gray-700" strokeWidth={3} />
          </div>
        </div>

        {/* Warning Section */}
        <div className="bg-gradient-to-b from-amber-50 to-yellow-50 px-4 py-10 -mx-6 mb-8">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <AlertTriangle className="w-20 h-20 text-amber-500" strokeWidth={2.5} fill="#FEF3C7" />
            </div>
          </div>
          <div className="border-2 border-dashed border-gray-300 bg-white rounded-2xl p-6 mb-6 mx-4">
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed text-center mb-4">
              <span className="font-bold">Entenda oque realmente</span>
            </p>
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed text-center mb-4">
              <span className="text-amber-700 font-medium">atrasa a leitura do seu filho...</span>
            </p>
            <p className="text-gray-700 text-base leading-relaxed text-center">
              <span className="font-medium">falta de grafismo fonético na fase certa,</span> o que pode tornar o
              processo de alfabetização mais lento, frustrante e confuso — tanto para a criança quanto para você.
            </p>
          </div>
          <div className="text-center px-4">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Mas calma, você não tem culpa disso... É que ninguém te ensinou como ajudar seu filho a despertar a
              leitura de forma{' '}
              <span className="text-amber-700 font-bold">leve, divertida e no tempo certo.</span>
            </p>
          </div>
        </div>

        {/* Green Arrow Down */}
        <div className="flex justify-center mb-8">
          <ArrowDown className="w-12 h-12 text-green-600" strokeWidth={3} />
        </div>

        {/* Kit Section (imagem estática) */}
        <div className="text-center px-4 mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Por isso você precisa do Kit...
          </h3>
          <div className="flex justify-center mb-8">
            <img
              src="https://i.postimg.cc/XN28Hss3/imagem-de-cima-principal.png"
              alt="Kit de Grafismo Fonético"
              className="w-full max-w-md h-auto"
              loading="lazy"
            />
          </div>
        </div>

        {/* Activities Section */}
        <div className="px-4 mb-8">
          <div className="flex justify-center mb-8">
            <img
              src="https://i.postimg.cc/SRqxcLMp/imagem-das-criancas.png"
              alt="Crianças usando o Kit"
              className="w-full max-w-sm h-auto rounded-2xl shadow-lg"
              loading="lazy"
            />
          </div>
          <div className="bg-gradient-to-b from-amber-50 to-yellow-50 rounded-2xl p-6 sm:p-8">
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
              Cada atividade do Kit de Grafismo Fonético foi cuidadosamente criada para:
            </p>
            <div className="flex items-start gap-3 sm:gap-4 mb-4">
              <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-green-600 rounded-sm flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={3} />
              </div>
              <p className="text-gray-800 leading-relaxed text-left text-sm sm:text-base">
                Desenvolver a coordenação motora fina
              </p>
            </div>
            <div className="flex items-start gap-3 sm:gap-4 mb-4">
              <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-green-600 rounded-sm flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={3} />
              </div>
              <p className="text-gray-800 leading-relaxed text-left text-sm sm:text-base">
                Estimular a criatividade e a atenção da criança
              </p>
            </div>
            <div className="flex items-start gap-3 sm:gap-4 mb-4">
              <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-green-600 rounded-sm flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={3} />
              </div>
              <p className="text-gray-800 leading-relaxed text-left text-sm sm:text-base">
                Fortalecer as conexões cerebrais que facilitam a leitura
              </p>
            </div>
            <div className="flex items-start gap-3 sm:gap-4 mb-4">
              <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-green-600 rounded-sm flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={3} />
              </div>
              <p className="text-gray-800 leading-relaxed text-left text-sm sm:text-base">
                Despertar o interesse pelas palavras e pelos sons
              </p>
            </div>
            <div className="flex items-start gap-3 sm:gap-4 mb-6">
              <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-green-600 rounded-sm flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={3} />
              </div>
              <p className="text-gray-800 leading-relaxed text-left text-sm sm:text-base">
                Tornar o processo de alfabetização leve, divertido e eficaz!
              </p>
            </div>
            <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
              Tudo isso com apenas alguns minutos por dia — direto de casa, no ritmo natural da criança.
            </p>
          </div>
        </div>

        {/* Why Activities Work Section */}
        <div className="px-4 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">
            Por que as atividades de Grafismo Fonético funcionam?
          </h2>
          <div className="flex flex-col items-center gap-4 mb-6">
            <div className="w-12 h-1 bg-red-500" />
            <div className="w-12 h-1 bg-orange-400" />
            <div className="w-12 h-1 bg-yellow-400" />
            <div className="w-12 h-1 bg-green-500" />
          </div>
          <div className="bg-gray-50 rounded-3xl p-6 sm:p-8">
            <div className="flex justify-center mb-6">
              <img
                src="https://i.postimg.cc/HLs095bB/imagem-da-crianca-menina-segurando-o-kit.png"
                alt="Criança segurando o kit"
                className="w-full max-w-xs h-auto rounded-2xl shadow-md"
                loading="lazy"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-indigo-900 leading-tight mb-4">
              Antes de aprender a ler, o cérebro da criança precisa reconhecer padrões, sons e movimentos.
            </h3>
            <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-4">
              As atividades de grafismo fonético ajudam o cérebro a fazer essas conexões de forma natural e divertida.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
              habilidades essenciais para que a criança reconheça sílabas, sons e estruturas das palavras de forma
              natural.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Ao traçar linhas, curvas e padrões fonéticos, ela fortalece as conexões cerebrais responsáveis pela
              leitura,
            </p>
            <p className="text-gray-900 text-sm sm:text-base leading-relaxed font-bold">
              acelerando o processo de alfabetização de forma divertida e sem pressão.
            </p>
          </div>
        </div>

        {/* Benefits Card with Image */}
        <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-3xl shadow-lg p-6 sm:p-8 mb-8 border border-green-200">
          <div className="flex justify-center mb-6">
            <img
              src="https://i.postimg.cc/3RjCRVZm/imagem-da-mae-ensinando-a-crianca-com-o-kit.png"
              alt="Mãe ensinando criança com o kit"
              className="w-full max-w-md h-auto rounded-2xl shadow-md"
              loading="lazy"
            />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-green-800 leading-tight mb-6">
            E em poucos dias você vai notar a diferença na leitura do seu filho:
          </h2>
          <div className="space-y-4">
            {[
              'Vai reconhecer sílabas e sons com mais facilidade',
              'Vai se sentir mais confiante ao tentar ler palavras novas',
              'Vai mostrar mais interesse por livros e história',
              'Vai aprender no ritmo dele, sem frustração ou comparação',
              'E o melhor: vai começar a gostar do momento de leitura em casa',
            ].map((text) => (
              <div key={text} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-800 text-sm sm:text-base leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Text Section Below Green Card */}
        <div className="text-center mb-8 px-4 max-w-md mx-auto">
          <p className="text-gray-600 text-[20px] leading-[1.6]">
            Com o <span className="font-semibold text-gray-800">Kit de Grafismo Fonético</span>, seu filho{' '}
            <span className="font-semibold text-gray-800">
              desenvolve o cérebro para aprender a ler com leveza
            </span>
            , no tempo dele — e com{' '}
            <span className="font-semibold text-gray-800">resultados visíveis em poucos dias.</span>
          </p>
        </div>

        {/* Start Journey Card Section */}
        <div className="flex flex-col items-center max-w-[480px] mx-auto mb-8 px-4">
          {/* Card with Icon Pill */}
          <div className="relative w-full max-w-[340px] md:max-w-[420px]">
            {/* Pill Icon Badge */}
            <div
              className="absolute left-1/2 -translate-x-1/2 -top-7 z-10 w-[208px] h-[56px] bg-[#9A7730] rounded-[28px] flex items-center justify-center shadow-md"
              aria-label="Ícone de lápis"
            >
              <Pencil className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
            {/* Cream Card */}
            <div className="bg-[#FFF7D6] rounded-[18px] pt-[36px] pb-[22px] px-[22px] shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
              <div
                className="text-center"
                style={{ fontFamily: 'Inter, Poppins, system-ui, -apple-system, sans-serif' }}
              >
                <p className="text-[16px] md:text-[18px] font-medium text-[#2E2E2E] leading-[1.4] mb-[6px]">
                  Comece a jornada de
                </p>
                <p className="text-[18px] md:text-[20px] text-[#1E1E1E] leading-[1.4]">
                  <span className="font-bold">aprendizado do seu filho</span> hoje
                </p>
              </div>
            </div>
          </div>
          {/* Green CTA Button */}
          <button
            className="mt-4 w-full max-w-[280px] md:max-w-[320px] h-[56px] bg-[#28D17C] hover:bg-[#20B96D] text-white font-bold text-[16px] md:text-[17px] rounded-[28px] shadow-[0_6px_14px_rgba(40,209,124,0.35)] transition-colors focus:outline-none focus:ring-2 focus:ring-[#BFF3DA] focus:ring-offset-2"
            aria-label="Quero meu filho ou filha lendo"
          >
            Quero meu filho(a) Lendo!
          </button>
        </div>

        {/* What Your Child Will Learn Section */}
        <div
          className="flex flex-col items-center max-w-[520px] mx-auto mb-8 px-4"
          style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
        >
          {/* Title with Pill Background */}
          <div className="bg-[#FBE8A1] rounded-[12px] px-[14px] py-[8px] mb-4">
            <h2 className="text-[18px] md:text-[20px] font-bold text-[#1E1E1E] text-center">
              📚 O Que Seu Filho Vai Aprender 📚
            </h2>
          </div>

          {/* Cards Container */}
          <div className="w-full space-y-[18px]">
            {/* Card 1 - Reconhecimento de Sons e Letras */}
            <div className="relative bg-white border border-[#EFE7D6] rounded-[20px] shadow-[0_8px_20px_rgba(0,0,0,0.06)] p-[22px_20px] text-center overflow-hidden">
              <div className="absolute inset-0 rounded-[20px] pointer-events-none">
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <rect
                    x="2"
                    y="2"
                    width="calc(100% - 4px)"
                    height="calc(100% - 4px)"
                    rx="18"
                    fill="none"
                    stroke="url(#gradient1)"
                    strokeWidth="3"
                    strokeDasharray="10 5"
                    strokeLinecap="round"
                    className="animate-dash"
                  />
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFB74D" />
                      <stop offset="50%" stopColor="#FFA726" />
                      <stop offset="100%" stopColor="#FF9800" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              {/* Icon */}
              <div className="flex justify-center mb-[10px]" role="img" aria-label="Ícone de blocos ABC">
                <img
                  src="https://i.postimg.cc/1XzbVBhw/Chat-GPT-Image-5-de-nov-de-2025-23-38-46-removebg-preview.png"
                  alt="Reconhecimento de Sons e Letras"
                  className="w-[120px] h-[120px] object-contain"
                  loading="lazy"
                />
              </div>
              {/* Title */}
              <h3 className="text-[20px] md:text-[22px] font-extrabold text-[#1E1E1E] mb-[8px]">
                Reconhecimento de Sons e Letras
              </h3>
              {/* Description */}
              <p className="text-[15px] md:text-[16px] font-medium text-[#404040] leading-[1.5]">
                Cada som é associado a <span className="font-bold">fortalecendo as conexões cerebrais</span> de
                forma sólida e duradoura.
              </p>
            </div>

            {/* Dashed Separator */}
            <div className="border-t border-dashed border-[#E5DCC5] my-[6px]" />

            {/* Card 2 - Formação de Palavras */}
            <div className="relative bg-white border border-[#EFE7D6] rounded-[20px] shadow-[0_8px_20px_rgba(0,0,0,0.06)] p-[22px_20px] text-center overflow-hidden">
              <div className="absolute inset-0 rounded-[20px] pointer-events-none">
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <rect
                    x="2"
                    y="2"
                    width="calc(100% - 4px)"
                    height="calc(100% - 4px)"
                    rx="18"
                    fill="none"
                    stroke="url(#gradient2)"
                    strokeWidth="3"
                    strokeDasharray="10 5"
                    strokeLinecap="round"
                    className="animate-dash"
                    style={{ animationDelay: '0.5s' }}
                  />
                  <defs>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#BA68C8" />
                      <stop offset="50%" stopColor="#AB47BC" />
                      <stop offset="100%" stopColor="#9C27B0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              {/* Icon */}
              <div className="flex justify-center mb-[10px]" role="img" aria-label="Ícone de peças de quebra-cabeça">
                <img
                  src="https://i.postimg.cc/8Ch22smw/Chat-GPT-Image-5-de-nov-de-2025-23-43-35-removebg-preview.png"
                  alt="Formação de Palavras"
                  className="w-[120px] h-[120px] object-contain"
                  loading="lazy"
                />
              </div>
              {/* Title */}
              <h3 className="text-[20px] md:text-[22px] font-extrabold text-[#1E1E1E] mb-[8px]">
                Formação de Palavras
              </h3>
              {/* Description */}
              <p className="text-[15px] md:text-[16px] font-medium text-[#404040] leading-[1.5]">
                Atividades dinâmicas que transformam a{' '}
                <span className="font-bold">construção de palavras</span> em uma experiência divertida e intuitiva.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Learning Cards Section */}
        <div
          className="flex flex-col items-center max-w-[520px] mx-auto mb-8 px-4 space-y-[18px]"
          style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
        >
          {/* Card 1 - Compreensão e Leitura Fluente */}
          <div className="relative w-full bg-white border border-dashed border-[#E9D9A4] rounded-[20px] shadow-[0_8px_20px_rgba(0,0,0,0.06)] p-[22px_20px] text-center overflow-hidden">
            <div className="absolute inset-0 rounded-[20px] pointer-events-none">
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <rect
                  x="2"
                  y="2"
                  width="calc(100% - 4px)"
                  height="calc(100% - 4px)"
                  rx="18"
                  fill="none"
                  stroke="url(#gradient3)"
                  strokeWidth="3"
                  strokeDasharray="10 5"
                  strokeLinecap="round"
                  className="animate-dash"
                  style={{ animationDelay: '1s' }}
                />
                <defs>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFD54F" />
                    <stop offset="50%" stopColor="#FFC107" />
                    <stop offset="100%" stopColor="#FFA000" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            {/* Icon */}
            <div className="flex justify-center mb-[10px]" role="img" aria-label="Ícone de compreensão e leitura">
              <img
                src="https://i.postimg.cc/6pGJhM7j/Chat-GPT-Image-5-de-nov-de-2025-23-49-17-removebg-preview.png"
                alt="Compreensão e Leitura Fluente"
                className="w-[120px] h-[120px] object-contain"
                loading="lazy"
              />
            </div>
            {/* Title */}
            <h3 className="text-[20px] md:text-[22px] font-extrabold text-[#1E1E1E] mb-[8px]">
              Compreensão e Leitura Fluente
            </h3>
            {/* Description */}
            <p className="text-[15px] md:text-[16px] font-medium text-[#404040] leading-[1.5]">
              Exercícios práticos que <span className="font-bold">aprimoram a compreensão</span> do que está sendo
              lido, ajudando seu filho a <span className="font-bold">ganhar fluência e confiança</span>.
            </p>
          </div>

          {/* Card 2 - Guia Passo a Passo com Ilustrações */}
          <div className="relative w-full bg-white border border-dashed border-[#E9D9A4] rounded-[20px] shadow-[0_8px_20px_rgba(0,0,0,0.06)] p-[22px_20px] text-center overflow-hidden">
            <div className="absolute inset-0 rounded-[20px] pointer-events-none">
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <rect
                  x="2"
                  y="2"
                  width="calc(100% - 4px)"
                  height="calc(100% - 4px)"
                  rx="18"
                  fill="none"
                  stroke="url(#gradient4)"
                  strokeWidth="3"
                  strokeDasharray="10 5"
                  strokeLinecap="round"
                  className="animate-dash"
                  style={{ animationDelay: '1.5s' }}
                />
                <defs>
                  <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#EF5350" />
                    <stop offset="50%" stopColor="#E53935" />
                    <stop offset="100%" stopColor="#C62828" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            {/* Icon */}
            <div className="flex justify-center mb-[10px]" role="img" aria-label="Ícone de guia ilustrado">
              <img
                src="https://i.postimg.cc/5NyMX4bp/Chat-GPT-Image-5-de-nov-de-2025-23-55-38-removebg-preview.png"
                alt="Guia Passo a Passo com Ilustrações"
                className="w-[120px] h-[120px] object-contain"
                loading="lazy"
              />
            </div>
            {/* Title */}
            <h3 className="text-[20px] md:text-[22px] font-extrabold text-[#1E1E1E] mb-[8px]">
              Guia Passo a Passo com Ilustrações
            </h3>
            {/* Description */}
            <p className="text-[15px] md:text-[16px] font-medium text-[#404040] leading-[1.5]">
              <span className="font-bold">Instruções visuais e detalhadas</span> para que{' '}
              <span className="font-bold">cada fase do aprendizado</span> seja clara e tranquila, sem complicações.
            </p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div
          id="scroll-target-section"
          data-scroll-target
          className="w-full bg-[#FFF7D6] py-[30px] px-4 mt-8"
          style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
        >
          <div className="max-w-[520px] mx-auto">
            <h2
              className="text-[22px] md:text-[24px] font-bold text-[#1E1E1E] text-center mb-[20px] leading-[1.3]"
              aria-label="Veja como é fácil ensinar seu filho ou filha a ler com o Grafismo Fonético"
            >
              Veja como é facil <span className="font-bold">ensinar seu filho(a) a ler</span> com o Grafismo
              Fonético...
            </h2>
            <div className="flex items-center justify-center mt-[6px]">
              <div className="flex flex-col items-center mr-[10px]">
                <div className="w-[6px] h-[6px] rounded-full bg-[#B8943A]" />
                <div className="w-[2px] h-[18px] bg-[#B8943A]" />
              </div>
              <p className="text-[25px] font-bold text-[#B8943A]">Aperte o play</p>
              <span role="img" aria-hidden="true" className="ml-[8px] text-[25px]">
                👉
              </span>
            </div>
          </div>
        </div>

        {/* AQUI TERMINA O CONTEÚDO DO APP – sem seção de KIT duplicada */}
      </div>
    </div>
  );
}

export default App;
