'use client';

import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import { FormEvent, useEffect, useState } from 'react';
import {
  Activity,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  HeartPulse,
  MapPin,
  Phone,
  Quote,
  ShieldCheck,
  Stethoscope,
  UserRound,
  Clock3,
  HeartHandshake,
  Menu,
  X
} from 'lucide-react';

const whatsappLink = 'https://wa.me/5538998220202?text=Ol%C3%A1%2C%20Dra.%20Let%C3%ADcia%20Sampaio!%20Gostaria%20de%20agendar%20uma%20consulta.';

const areas = [
  { icon: HeartPulse, title: 'Avaliação Cardiológica', text: 'Consulta completa com anamnese, exame físico e análise dos fatores de risco.' },
  { icon: Activity, title: 'Exames e Diagnósticos', text: 'Solicitação e interpretação de ECG, MAPA, Holter, teste ergométrico e exames laboratoriais.' },
  { icon: ShieldCheck, title: 'Prevenção Cardiovascular', text: 'Plano individual para reduzir riscos e promover longevidade com qualidade de vida.' },
  { icon: UserRound, title: 'Cardiologia da Mulher', text: 'Atenção especializada às particularidades cardiovasculares femininas.' }
];

const diseases = [
  { title: 'Hipertensão Arterial', text: 'Acompanhamento da pressão alta e prevenção de complicações cardiovasculares.' },
  { title: 'Arritmias Cardíacas', text: 'Investigação de palpitações, alterações no ritmo cardíaco, tonturas e desmaios.' },
  { title: 'Insuficiência Cardíaca', text: 'Tratamento e monitoramento para melhorar sintomas, segurança e qualidade de vida.' },
  { title: 'Doença Arterial Coronariana', text: 'Prevenção e cuidado de angina, risco de infarto e obstruções nas artérias.' },
  { title: 'Colesterol Elevado', text: 'Controle dos níveis de colesterol e orientação para reduzir risco cardiovascular.' },
  { title: 'Check-up Cardiológico', text: 'Avaliação preventiva para pessoas com histórico familiar, sintomas ou fatores de risco.' }
];

const testimonials = [
  { name: 'Mariana S.', text: 'Excelente médica. Atenciosa, competente e muito humana. Explica tudo com clareza e transmite muita segurança.' },
  { name: 'Carlos A.', text: 'Atendimento impecável do início ao fim. A consulta foi completa e saí com todas as orientações bem claras.' },
  { name: 'Juliana T.', text: 'Profissional incrível. Acompanhou meu tratamento com cuidado, empatia e muita dedicação.' }
];

export default function Home() {
  const [formStatus, setFormStatus] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMobileMenu();
    };

    window.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [mobileMenuOpen]);

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const nome = String(data.get('nome') ?? '').trim();
    const telefone = String(data.get('telefone') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const motivo = String(data.get('motivo') ?? '').trim();
    const mensagem = String(data.get('mensagem') ?? '').trim();

    if (!nome || !telefone || !motivo || !mensagem) {
      setFormStatus('Preencha os campos obrigatórios antes de enviar.');
      return;
    }

    const texto = [
      'Olá, Dra. Letícia Sampaio! Gostaria de entrar em contato pelo site.',
      '',
      `Nome: ${nome}`,
      `Telefone / WhatsApp: ${telefone}`,
      email ? `E-mail: ${email}` : '',
      `Motivo do contato: ${motivo}`,
      `Mensagem: ${mensagem}`
    ].filter(Boolean).join('\n');

    setFormStatus('Abrindo o WhatsApp para concluir o envio...');
    window.open(`https://wa.me/5538998220202?text=${encodeURIComponent(texto)}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <main>
      <header className="header">
        <a href="#inicio" className="logo" aria-label="Início">
          <Image src="/images/logo-header.png" alt="Dra. Letícia Sampaio — Cardiologia" width={330} height={170} priority />
        </a>
        <nav className="desktop-nav">
          <a href="#sobre">Sobre</a>
          <a href="#areas">Áreas de atuação</a>
          <a href="#doencas">Doenças</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#contato">Contato</a>
        </nav>
        <a className="btn btn-small header-cta" href={whatsappLink} target="_blank" rel="noreferrer"><FaWhatsapp className="whatsapp-icon" aria-hidden="true" /> Agendar consulta</a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileMenuOpen(true)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {mobileMenuOpen && (
        <>
          <button
            className="mobile-menu-backdrop"
            type="button"
            aria-label="Fechar menu"
            onClick={closeMobileMenu}
          />
          <aside id="mobile-menu" className="mobile-menu" aria-label="Menu principal" role="dialog" aria-modal="true">
            <div className="mobile-menu-header">
              <strong>Menu</strong>
              <button className="mobile-menu-close" type="button" aria-label="Fechar menu" onClick={closeMobileMenu}>
                <X size={26} />
              </button>
            </div>
            <nav aria-label="Navegação mobile">
              <a href="#inicio" onClick={closeMobileMenu}>Início</a>
              <a href="#sobre" onClick={closeMobileMenu}>Sobre</a>
              <a href="#areas" onClick={closeMobileMenu}>Áreas de atuação</a>
              <a href="#doencas" onClick={closeMobileMenu}>Principais doenças</a>
              <a href="#depoimentos" onClick={closeMobileMenu}>Depoimentos</a>
              <a href="#contato" onClick={closeMobileMenu}>Contato</a>
            </nav>
            <a className="btn mobile-menu-cta" href={whatsappLink} target="_blank" rel="noreferrer" onClick={closeMobileMenu}>
              <FaWhatsapp className="whatsapp-icon" aria-hidden="true" /> Agendar consulta
            </a>
          </aside>
        </>
      )}

      <section id="inicio" className="hero section-pad">
        <div className="hero-content">
          <span className="eyebrow">Cardiologia com excelência e humanização</span>
          <h1>Cuidar do seu coração é cuidar da sua vida</h1>
          <p>Atendimento cardiológico completo, com foco na prevenção, diagnóstico preciso e tratamento individualizado para todas as fases da vida.</p>
          <div className="actions">
            <a className="btn" href={whatsappLink} target="_blank"><FaWhatsapp className="whatsapp-icon" aria-hidden="true" /> Agendar consulta</a>
            <a className="btn btn-outline" href="#sobre">Saiba mais <ChevronRight size={18} /></a>
          </div>
          <div className="hero-points">
            <span><CheckCircle2 /> Atendimento humanizado</span>
            <span><CheckCircle2 /> Tecnologia e precisão</span>
            <span><CheckCircle2 /> Foco em prevenção</span>
          </div>
        </div>
        <div className="hero-image">
          <Image src="/images/doctor-placeholder.webp" alt="Foto da médica cardiologista" width={900} height={1050} priority />
          <div className="doctor-card">
            <HeartPulse />
            <div><strong>Dra. Letícia Sampaio</strong><span>Cardiologia • CRM 73994</span></div>
          </div>
        </div>
      </section>

      <section id="areas" className="section-pad">
        <span className="eyebrow">Áreas de atuação</span>
        <div className="section-title"><h2>Cuidado completo para o seu coração</h2><p>Cards mais elegantes, com ícone, descrição clara e sensação premium.</p></div>
        <div className="cards four">
          {areas.map(({ icon: Icon, title, text }) => (
            <article className="card area-card" key={title}>
              <div className="icon"><Icon size={30} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="#contato">Saiba mais <ChevronRight size={16}/></a>
            </article>
          ))}
        </div>
      </section>

      <section id="sobre" className="about section-pad soft-bg">
        <div className="about-img"><Image src="/images/sobre-a-medica.webp" alt="Dra. Letícia Sampaio" width={900} height={1050} /></div>
        <div>
          <span className="eyebrow">Sobre a médica</span>
          <h2>Compromisso com a sua saúde em cada detalhe</h2>
          <p>Dra. Letícia Sampaio é médica cardiologista com atuação focada em prevenção, diagnóstico e tratamento das doenças cardiovasculares.</p>
          <ul className="check-list">
            <li>Formação sólida e atualização constante</li>
            <li>Atendimento individualizado e acolhedor</li>
            <li>Explicações claras e condutas seguras</li>
            <li>Plano terapêutico alinhado à rotina do paciente</li>
          </ul>
          <a className="btn" href="#contato">Fale com a clínica <ChevronRight size={18}/></a>
        </div>
      </section>


      <section className="cardiology-feature section-pad">
        <div className="cardiology-feature-copy">
          <span className="eyebrow">Cardiologia</span>
          <h2>Prevenção, diagnóstico e cuidado em todas as fases da vida</h2>
          <p>A cardiologia acompanha muito mais do que sintomas: ela ajuda a identificar riscos precocemente, orientar hábitos e construir um plano de cuidado adequado à sua rotina.</p>
          <div className="cardiology-benefits">
            <span><HeartHandshake /> Cuidado individualizado</span>
            <span><Activity /> Avaliação clínica completa</span>
            <span><ShieldCheck /> Prevenção cardiovascular</span>
          </div>
          <a className="btn" href={whatsappLink} target="_blank" rel="noreferrer">Agendar avaliação <ChevronRight size={18}/></a>
        </div>
        <div className="cardiology-feature-image">
          <Image src="/images/clinic-placeholder.webp" alt="Atendimento cardiológico da Dra. Letícia Sampaio" width={900} height={1050} />
        </div>
      </section>

      <section className="schedule-banner">
        <Image className="schedule-banner-bg" src="/images/24h.webp" alt="Dra. Letícia Sampaio em atendimento" fill sizes="100vw" />
        <div className="schedule-banner-overlay" />
        <div className="schedule-banner-content">
          <span className="eyebrow light">Agendamento 24h</span>
          <h2>Agende sua consulta em qualquer horário do dia</h2>
          <p>Entre em contato pelo WhatsApp e envie sua solicitação. A equipe responderá assim que possível para confirmar o melhor horário.</p>
          <div className="schedule-highlights">
            <span><Clock3 /> Solicitação disponível 24 horas</span>
            <span><HeartPulse /> Consulta cardiológica em Montes Claros</span>
          </div>
          <a className="btn btn-light" href={whatsappLink} target="_blank" rel="noreferrer"><FaWhatsapp className="whatsapp-icon" aria-hidden="true" /> Agendar consulta</a>
        </div>
      </section>

      <section id="depoimentos" className="section-pad testimonials">
        <span className="eyebrow center">Depoimentos</span>
        <h2>O que meus pacientes dizem</h2>
        <div className="cards three">
          {testimonials.map((item) => (
            <article className="card testimonial-card" key={item.name}>
              <Quote className="quote" />
              <p>{item.text}</p>
              <div className="patient"><span>{item.name.slice(0,1)}</span><div><strong>{item.name}</strong><small>Paciente</small></div></div>
              <div className="stars">★★★★★</div>
            </article>
          ))}
        </div>
        <div className="section-cta">
          <div>
            <span className="eyebrow">Atendimento acolhedor</span>
            <h3>Tenha uma experiência de cuidado individualizado</h3>
            <p>Agende sua avaliação cardiológica e converse com a Dra. Letícia Sampaio.</p>
          </div>
          <a className="btn" href={whatsappLink} target="_blank" rel="noreferrer"><FaWhatsapp className="whatsapp-icon" aria-hidden="true" /> Agendar consulta</a>
        </div>
      </section>

      <section id="doencas" className="section-pad">
        <span className="eyebrow">Principais doenças</span>
        <div className="section-title"><h2>Doenças que trato</h2><p>Cards mais objetivos, com leitura rápida e melhor hierarquia visual.</p></div>
        <div className="cards three diseases-grid">
          {diseases.map((item) => (
            <article className="card disease-card" key={item.title}>
              <div className="icon small"><Stethoscope size={24} /></div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className="section-cta section-cta-gold">
          <div>
            <span className="eyebrow">Prevenção começa com avaliação</span>
            <h3>Está com sintomas ou possui fatores de risco?</h3>
            <p>Não espere o desconforto se intensificar. Procure uma avaliação cardiológica especializada.</p>
          </div>
          <a className="btn" href={whatsappLink} target="_blank" rel="noreferrer"><CalendarDays size={18}/> Marcar avaliação</a>
        </div>
      </section>

      <section id="contato" className="contact section-pad soft-bg">
        <div>
          <span className="eyebrow">Contato</span>
          <h2>Agende sua consulta ou envie sua dúvida</h2>
          <p>Formulário adaptado para atendimento médico: sem CNPJ, com campos simples para facilitar o contato do paciente.</p>
          <div className="contact-info">
            <a href={whatsappLink} target="_blank"><FaWhatsapp className="whatsapp-icon contact-whatsapp-icon" aria-hidden="true" /> (38) 99822-0202</a>
            <a href="tel:+5538998220202"><Phone /> (38) 99822-0202</a>
            <span><MapPin /> Av. Cel. Prates, 376 — Ed. Plazza Center, sala 505 — Centro, Montes Claros/MG</span>
          </div>
          <div className="map-wrap">
            <iframe
              title="Localização da clínica"
              src="https://www.google.com/maps?q=Av.%20Cel.%20Prates%2C%20376%2C%20Centro%2C%20Montes%20Claros%20MG&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <form className="form" onSubmit={handleContactSubmit}>
          <label>
            <span>Nome completo *</span>
            <input name="nome" type="text" placeholder="Digite seu nome" autoComplete="name" required />
          </label>
          <label>
            <span>Telefone / WhatsApp *</span>
            <input name="telefone" type="tel" placeholder="(38) 99999-9999" autoComplete="tel" required />
          </label>
          <label>
            <span>E-mail</span>
            <input name="email" type="email" placeholder="seuemail@exemplo.com" autoComplete="email" />
          </label>
          <label>
            <span>Motivo do contato *</span>
            <select name="motivo" defaultValue="" required>
              <option value="" disabled>Selecione uma opção</option>
              <option>Agendamento de consulta</option>
              <option>Informações sobre atendimento</option>
              <option>Retorno</option>
              <option>Exames cardiológicos</option>
              <option>Outro assunto</option>
            </select>
          </label>
          <label>
            <span>Mensagem *</span>
            <textarea name="mensagem" placeholder="Conte brevemente como podemos ajudar" rows={5} required />
          </label>
          <button className="btn" type="submit"><ClipboardCheck size={18}/> Enviar pelo WhatsApp</button>
          {formStatus && <p className="form-status" role="status" aria-live="polite">{formStatus}</p>}
          <small className="form-note">Ao enviar, o WhatsApp será aberto com a mensagem pronta para confirmação.</small>
        </form>
      </section>

      <a className="whatsapp-float" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Agendar consulta pelo WhatsApp">
        <FaWhatsapp className="whatsapp-float-icon" aria-hidden="true" />
      </a>

      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <Image src="/images/logo-footer.png" alt="Dra. Letícia Sampaio — Cardiologia" width={360} height={190} />
            <p>Cardiologia com excelência, humanização e foco em prevenção para uma vida mais saudável.</p>
          </div>
          <div className="footer-column">
            <h3>Responsável técnico</h3>
            <div className="footer-info-block">
              <strong>Dra. Letícia Sampaio</strong>
              <span>Médica Cardiologista</span>
              <span>CRM 73994</span>
            </div>
          </div>
          <div className="footer-column">
            <h3>Contato</h3>
            <a className="footer-info-row" href={whatsappLink} target="_blank" rel="noreferrer"><FaWhatsapp className="whatsapp-icon footer-whatsapp-icon" aria-hidden="true" /><span>(38) 99822-0202</span></a>
            <div className="footer-info-row">
              <MapPin size={17}/>
              <address>Av. Cel. Prates, 376<br/>Edifício Plazza Center, sala 505<br/>Centro — Montes Claros/MG</address>
            </div>
          </div>
          <div className="footer-column">
            <h3>Horário de funcionamento</h3>
            <div className="footer-info-row">
              <Clock3 size={17}/>
              <div className="footer-hours">
                <div><span>Segunda a sexta</span><strong>08h às 18h</strong></div>
                <div><span>Sábado e domingo</span><strong>Fechado</strong></div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <small>© 2026 Dra. Letícia Sampaio. Todos os direitos reservados.</small>
        </div>
      </footer>
    </main>
  );
}
