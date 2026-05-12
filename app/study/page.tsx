"use client";

import { useEffect, type DetailedHTMLProps, type HTMLAttributes } from "react";

type IconifyAttrs = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  icon: string;
};

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "iconify-icon": IconifyAttrs;
    }
  }
}

const Icon = ({ icon, className }: { icon: string; className?: string }) => (
  <iconify-icon icon={icon} className={className} />
);

export default function StudyLanding() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("on");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="mesh-bg break-keep min-h-[100dvh] text-paper-800">
      <div className="grain" />

      {/* Floating glass nav */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-40 reveal w-[min(94%,720px)]">
        <div className="glass rounded-full pl-4 pr-2 py-2 flex items-center justify-between gap-3 text-sm">
          <a href="#top" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex w-7 h-7 rounded-full bg-paper-800 text-paper-50 items-center justify-center">
              <Icon icon="solar:users-group-rounded-bold" className="text-[15px]" />
            </span>
            <span>같이끝내다</span>
          </a>
          <div className="hidden md:flex items-center gap-5 text-paper-500">
            <a href="#problem" className="hover:text-paper-800 transition">왜 필요한가</a>
            <a href="#service" className="hover:text-paper-800 transition">어떻게 다른가</a>
            <a href="#voices" className="hover:text-paper-800 transition">참여자 후기</a>
          </div>
          <a
            href="#cta"
            className="cta-btn magnetic inline-flex items-center gap-1.5 rounded-full bg-paper-800 text-paper-50 px-4 py-2 font-medium"
          >
            스터디 둘러보기
            <Icon icon="solar:arrow-right-linear" />
          </a>
        </div>
      </nav>

      <main id="top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        {/* HERO */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-7 reveal">
            <div className="inline-flex items-center gap-2 rounded-full border border-paper-200 bg-white/60 px-3 py-1 text-xs text-paper-500 mb-6">
              <Icon icon="solar:chart-2-linear" />
              <span>
                국내 온라인 강의 평균 완강률{" "}
                <span className="text-paper-800 font-semibold">12%</span>
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-[64px] font-bold leading-[1.12] tracking-tight">
              AI 공부, 혼자 하면
              <br />
              <span className="text-accent">87%</span>가 중간에
              <br />
              포기합니다.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-paper-700 font-semibold">
              같이 끝내는 사람들이 있습니다.
            </p>
            <p className="mt-2 text-base md:text-lg text-paper-500 leading-relaxed max-w-[58ch]">
              직장인·취준생·개발자를 위한 소규모 AI 스터디 매칭 서비스. 4명 이하 소그룹으로 모여, 4주 안에 실제로 써먹는 것 하나를 완성합니다.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#cta"
                className="cta-btn magnetic inline-flex items-center justify-center gap-2 h-14 px-7 rounded-2xl bg-paper-800 text-paper-50 font-semibold shadow-lift"
              >
                지금 스터디 찾아보기
                <Icon icon="solar:arrow-right-linear" />
              </a>
              <a
                href="#service"
                className="inline-flex items-center justify-center gap-2 h-14 px-6 rounded-2xl border border-paper-200 bg-white/60 text-paper-700 font-medium hover:bg-white transition"
              >
                어떻게 다른지 보기
                <Icon icon="solar:alt-arrow-down-linear" />
              </a>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-paper-500">
              <span className="inline-flex w-2 h-2 rounded-full bg-accent float-slow" />
              <span>
                현재 <span className="text-paper-800 font-semibold num">38</span>개 스터디 모집 중 · 평균{" "}
                <span className="text-paper-800 font-semibold">3.2일</span> 내 매칭 완료
              </span>
            </div>
          </div>

          <aside className="lg:col-span-5 reveal">
            <div className="glass rounded-3xl p-6 md:p-7 shadow-lift">
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-xs uppercase tracking-widest text-paper-400">실시간 매칭 보드</div>
                  <div className="mt-1 font-display text-3xl md:text-4xl font-bold tracking-tight">이번 주의 모집</div>
                </div>
                <span className="inline-flex items-center gap-1 text-xs text-accent bg-accent/10 px-2 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block float-slow" />
                  LIVE
                </span>
              </div>

              <ul className="mt-5 divide-y divide-paper-100">
                {[
                  { icon: "solar:case-round-linear", title: "ChatGPT로 업무 자동화 · 입문", meta: "직장인 · 주 1회 화요일 저녁", count: "3/4명" },
                  { icon: "solar:code-square-linear", title: "RAG 실전 프로젝트 · 중급", meta: "개발자 · 주 2회 / 일·수", count: "2/4명" },
                  { icon: "solar:notebook-linear", title: "프롬프트 엔지니어링 기초", meta: "취준생 · 주 1회 토요일 오전", count: "4/4명 마감임박" },
                  { icon: "solar:gallery-edit-linear", title: "생성형 디자인 워크플로", meta: "디자이너 · 주 1회 금요일 저녁", count: "2/3명" },
                ].map((s) => (
                  <li key={s.title} className="py-3 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-paper-100 inline-flex items-center justify-center text-paper-700">
                      <Icon icon={s.icon} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold truncate">{s.title}</div>
                      <div className="text-xs text-paper-500">{s.meta}</div>
                    </div>
                    <span className="text-xs text-paper-700 font-medium">{s.count}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 pt-4 border-t border-paper-100 grid grid-cols-3 gap-3 text-center">
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-paper-400">진행률</div>
                  <div className="mt-1 font-display text-xl font-bold">
                    91<span className="text-paper-300 text-sm">%</span>
                  </div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-paper-400">평균 그룹</div>
                  <div className="mt-1 font-display text-xl font-bold">
                    3.6<span className="text-paper-300 text-sm">명</span>
                  </div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-paper-400">완성률</div>
                  <div className="mt-1 font-display text-xl font-bold">
                    78<span className="text-paper-300 text-sm">%</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </section>

        {/* SOCIAL PROOF */}
        <section className="mt-20" data-reveal>
          <div className="text-xs uppercase tracking-widest text-paper-400 text-center">함께한 곳</div>
          <div className="mt-4 overflow-hidden">
            <div className="marquee-track flex gap-12 whitespace-nowrap text-paper-400 text-lg font-display font-semibold">
              {Array.from({ length: 2 }).flatMap((_, i) =>
                ["스텔라랩스", "베리파이", "루미너스", "코어노트", "피크스튜디오", "오레오리", "노바딕", "플랜비"].map(
                  (n) => <span key={`${i}-${n}`}>{n}</span>,
                ),
              )}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px rounded-3xl overflow-hidden border border-paper-100 bg-paper-100">
            {[
              { label: "누적 참여자", value: "12,840", unit: "명" },
              { label: "개설된 스터디", value: "2,317", unit: "개" },
              { label: "평균 매칭 시간", value: "3.2", unit: "일" },
              { label: "참여자 만족도", value: "4.87", unit: "/5.0" },
            ].map((m) => (
              <div key={m.label} className="bg-paper-50 p-6">
                <div className="text-xs uppercase tracking-widest text-paper-400">{m.label}</div>
                <div className="mt-1 font-display text-3xl md:text-4xl font-bold num">
                  {m.value}
                  <span className="text-paper-300 text-base">{m.unit}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROBLEM */}
        <section id="problem" className="mt-24" data-reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-5">
              <div className="text-xs uppercase tracking-widest text-paper-400">왜 필요한가</div>
              <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight leading-[1.15]">
                이런 경험,
                <br />한 번쯤 있으시죠?
              </h2>
              <p className="mt-4 text-paper-500 leading-relaxed max-w-[40ch]">
                의지가 부족해서가 아닙니다. 끝까지 갈 수 있는 환경이 없었을 뿐입니다.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
              <article className="md:col-span-2 rounded-3xl bg-white/80 border border-paper-100 p-7 shadow-edge">
                <div className="flex items-center gap-3">
                  <span className="inline-flex w-9 h-9 rounded-xl bg-paper-800 text-paper-50 items-center justify-center font-display font-bold">01</span>
                  <h3 className="text-lg md:text-xl font-bold">강의는 샀는데, 완강한 적이 없다</h3>
                </div>
                <p className="mt-3 text-paper-500 leading-relaxed">
                  국내 온라인 강의 평균 완강률은 <span className="text-paper-800 font-semibold">12%</span>입니다.
                  &quot;언젠간 봐야지&quot; 폴더 속 강의가 몇 개인지 세어보셨나요?
                </p>
              </article>

              <article className="rounded-3xl bg-white/80 border border-paper-100 p-7 shadow-edge">
                <div className="flex items-center gap-3">
                  <span className="inline-flex w-9 h-9 rounded-xl bg-paper-800 text-paper-50 items-center justify-center font-display font-bold">02</span>
                  <h3 className="text-lg font-bold">3시간 봤는데, 아무것도 못 만들었다</h3>
                </div>
                <p className="mt-3 text-paper-500 leading-relaxed">
                  정보는 넘쳐나지만 내 상황에 맞는 로드맵은 없습니다. 무엇부터 해야 할지 모르는 채로 탭만 늘어납니다.
                </p>
              </article>

              <article className="rounded-3xl bg-paper-800 text-paper-50 p-7 shadow-lift">
                <div className="flex items-center gap-3">
                  <span className="inline-flex w-9 h-9 rounded-xl bg-accent text-paper-50 items-center justify-center font-display font-bold">03</span>
                  <h3 className="text-lg font-bold">주변에 같이 공부할 사람이 없다</h3>
                </div>
                <p className="mt-3 text-paper-300 leading-relaxed">
                  AI에 관심 있다고 하면 &quot;그거 배워서 뭐 해?&quot;라는 말이 돌아옵니다. 비슷한 목표를 가진 사람을 찾는 것 자체가 일입니다.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* SERVICE — Bento */}
        <section id="service" className="mt-28" data-reveal>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <div className="text-xs uppercase tracking-widest text-paper-400">어떻게 다른가</div>
              <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight leading-[1.15]">
                저희가 다르게 만드는 것,
                <br />딱 <span className="text-accent">3가지</span>입니다.
              </h2>
            </div>
            <a href="#cta" className="cta-btn inline-flex items-center gap-1.5 text-sm font-semibold text-paper-700 hover:text-accent transition">
              전체 스터디 보기
              <Icon icon="solar:arrow-right-linear" />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-6 gap-4">
            <article className="md:col-span-4 rounded-3xl bg-white/90 border border-paper-100 p-8 shadow-edge relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-56 h-56 rounded-full bg-accent/10 blur-2xl" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 text-xs text-accent bg-accent/10 px-3 py-1 rounded-full font-medium">
                  <Icon icon="solar:target-linear" />
                  핵심 기능 01
                </div>
                <h3 className="mt-4 font-display text-2xl md:text-3xl font-bold tracking-tight">목표 기반 소그룹 매칭</h3>
                <p className="mt-3 text-paper-500 leading-relaxed max-w-[52ch]">
                  &quot;ChatGPT로 업무 자동화&quot;, &quot;RAG 파이프라인 구현&quot; 등 목표와 수준이 맞는 사람끼리만 연결합니다. 비슷한 결을 가진 사람과 만나야 끝까지 갑니다.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4 max-w-md">
                  <div className="rounded-2xl bg-paper-50 border border-paper-100 p-4">
                    <div className="text-xs text-paper-400">스터디 지속률</div>
                    <div className="mt-1 font-display text-3xl font-bold num">
                      91<span className="text-paper-300 text-base">%</span>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-paper-50 border border-paper-100 p-4">
                    <div className="text-xs text-paper-400">평균 그룹 사이즈</div>
                    <div className="mt-1 font-display text-3xl font-bold num">
                      3.6<span className="text-paper-300 text-base">명</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className="md:col-span-2 rounded-3xl bg-paper-800 text-paper-50 p-8 shadow-lift">
              <div className="inline-flex items-center gap-2 text-xs text-[color:var(--color-accent-soft)] bg-accent/15 px-3 py-1 rounded-full font-medium">
                <Icon icon="solar:calendar-mark-linear" />
                핵심 기능 02
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold tracking-tight">4주 완성 커리큘럼</h3>
              <p className="mt-3 text-paper-300 leading-relaxed text-sm">
                매주 미션과 리뷰 세션. 4주 후 실제로 제출할 수 있는 결과물이 생깁니다.
              </p>
              <div className="mt-6 flex items-end gap-4">
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-paper-400">4주 내 완성</div>
                  <div className="mt-1 font-display text-3xl font-bold num">
                    78<span className="text-paper-400 text-base">%</span>
                  </div>
                </div>
                <div className="text-paper-400 text-xs leading-snug pb-1">
                  평균 학습 시간
                  <br />
                  <span className="text-paper-50 font-semibold">주 3.5시간</span>
                </div>
              </div>
            </article>

            <article className="md:col-span-6 rounded-3xl bg-white/90 border border-paper-100 p-8 shadow-edge">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-7">
                  <div className="inline-flex items-center gap-2 text-xs text-accent bg-accent/10 px-3 py-1 rounded-full font-medium">
                    <Icon icon="solar:chat-square-like-linear" />
                    핵심 기능 03
                  </div>
                  <h3 className="mt-4 font-display text-2xl md:text-3xl font-bold tracking-tight">스터디 운영 지원 · 리더 부담 없음</h3>
                  <p className="mt-3 text-paper-500 leading-relaxed max-w-[58ch]">
                    출석 체크, 일정 조율, 미션 알림까지 플랫폼이 대신합니다. 스터디장이 총무가 되는 일 없이, 배우는 데만 집중할 수 있습니다.
                  </p>
                </div>
                <div className="md:col-span-5 grid grid-cols-3 gap-3">
                  {[
                    { icon: "solar:user-check-linear", label: "출석 자동화" },
                    { icon: "solar:calendar-add-linear", label: "일정 조율" },
                    { icon: "solar:bell-bing-linear", label: "미션 알림" },
                  ].map((c) => (
                    <div key={c.label} className="rounded-2xl bg-paper-50 border border-paper-100 p-4 text-center">
                      <Icon icon={c.icon} className="text-2xl text-accent" />
                      <div className="mt-2 text-xs text-paper-500">{c.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-5 border-t border-paper-100 flex items-center gap-2 text-sm text-paper-500">
                <Icon icon="solar:clock-circle-linear" className="text-accent" />
                스터디 리더 평균 운영 부담 <span className="text-paper-800 font-semibold">주 15분 이하</span>
              </div>
            </article>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="voices" className="mt-28" data-reveal>
          <div className="text-xs uppercase tracking-widest text-paper-400">참여자 후기</div>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight leading-[1.15]">
            실제로 완주한 분들의 이야기
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-6">
            <article className="md:col-span-7 rounded-3xl bg-white/90 border border-paper-100 p-7 md:p-9 shadow-edge">
              <div className="flex items-center gap-3">
                <Icon icon="solar:quote-up-square-bold" className="text-3xl text-accent" />
                <span className="text-xs text-paper-400">&apos;ChatGPT 업무 자동화&apos; 수료</span>
              </div>
              <p className="mt-4 font-display text-2xl md:text-3xl font-bold tracking-tight leading-snug">
                &quot;4번 실패하고
                <br />5번째에 처음으로 끝냈습니다.&quot;
              </p>
              <p className="mt-5 text-paper-600 leading-relaxed">
                인프런 강의를 3개 샀는데 다 10% 선에서 멈췄어요. 여기서는 같은 조 사람들이 &quot;나도 이번 주 미션 겨우 했어요&quot; 하고 올리면 저도 어떻게든 하게 되더라고요. 4주 만에 회사 주간 보고서를 자동 요약하는 툴을 만들었고, 팀장님한테 따로 칭찬 받았습니다.
              </p>
              <div className="mt-7 flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://i.pravatar.cc/120?u=leesoohyun"
                  alt="이수현"
                  className="w-11 h-11 rounded-full object-cover border border-paper-200"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <div className="text-sm font-semibold">이수현</div>
                  <div className="text-xs text-paper-500">대기업 전략기획팀 · 7년차</div>
                </div>
              </div>
            </article>

            <aside className="md:col-span-5 rounded-3xl bg-paper-50 border border-paper-100 p-7 shadow-edge">
              <div className="text-xs uppercase tracking-widest text-paper-400">결과물</div>
              <h3 className="mt-2 font-display text-xl md:text-2xl font-bold tracking-tight">주간 보고서 자동 요약 워크플로</h3>
              <ul className="mt-5 space-y-3 text-sm text-paper-600">
                {[
                  "회의록 → GPT 요약 자동화 파이프라인",
                  "주간 회고 자동 메일링",
                  "팀장님 추가 칭찬 1회 · 본인 보고",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <Icon icon="solar:check-circle-bold" className="text-accent text-lg mt-0.5" />
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-paper-200 flex justify-between text-sm">
                <div>
                  <div className="text-paper-400 text-xs">절감된 시간</div>
                  <div className="font-display text-xl font-bold num">주 4.2시간</div>
                </div>
                <div className="text-right">
                  <div className="text-paper-400 text-xs">완주 주차</div>
                  <div className="font-display text-xl font-bold num">4 / 4</div>
                </div>
              </div>
            </aside>

            <aside className="md:col-span-5 rounded-3xl bg-paper-800 text-paper-50 p-7 shadow-lift">
              <div className="text-xs uppercase tracking-widest text-paper-400">결과물</div>
              <h3 className="mt-2 font-display text-xl md:text-2xl font-bold tracking-tight">RAG 기반 사내 문서 Q&amp;A 봇</h3>
              <ul className="mt-5 space-y-3 text-sm text-paper-300">
                {[
                  "벡터 DB 설계 + 청킹 전략 문서화",
                  "기획자 협업 통한 UX 정렬",
                  "포트폴리오 등재 · 이직 서류 합격률 향상",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <Icon icon="solar:check-circle-bold" className="text-[color:var(--color-accent-soft)] text-lg mt-0.5" />
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-paper-700 flex justify-between text-sm">
                <div>
                  <div className="text-paper-400 text-xs">팀 구성</div>
                  <div className="font-display text-xl font-bold">개발 2 · 기획 1 · PM 1</div>
                </div>
              </div>
            </aside>

            <article className="md:col-span-7 rounded-3xl bg-white/90 border border-paper-100 p-7 md:p-9 shadow-edge">
              <div className="flex items-center gap-3">
                <Icon icon="solar:quote-up-square-bold" className="text-3xl text-accent" />
                <span className="text-xs text-paper-400">&apos;RAG 실전 프로젝트&apos; 수료</span>
              </div>
              <p className="mt-4 font-display text-2xl md:text-3xl font-bold tracking-tight leading-snug">
                &quot;개발자인데 오히려
                <br />비개발자 팀원한테 더 많이 배웠어요.&quot;
              </p>
              <p className="mt-5 text-paper-600 leading-relaxed">
                LLM 관련 코드는 혼자도 짤 수 있었는데, 실제로 &apos;기획자라면 이걸 어떻게 쓸까&apos;를 같이 고민하면서 제품 감각이 생겼습니다. RAG 프로젝트를 팀으로 완성하고 포트폴리오에 올렸더니 이직 서류 합격률이 눈에 띄게 달라졌어요.
              </p>
              <div className="mt-7 flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://i.pravatar.cc/120?u=parkjunho"
                  alt="박준호"
                  className="w-11 h-11 rounded-full object-cover border border-paper-200"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <div className="text-sm font-semibold">박준호</div>
                  <div className="text-xs text-paper-500">프리랜서 백엔드 개발자 · 4년차</div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="mt-28" data-reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-paper-800 text-paper-50 p-8 md:p-14 shadow-lift">
            <div className="absolute -left-20 -top-20 w-72 h-72 rounded-full bg-accent/25 blur-3xl" />
            <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-paper-700/40 blur-3xl" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-paper-600 bg-paper-700/60 px-3 py-1 text-xs text-paper-200">
                  <Icon icon="solar:calendar-linear" />
                  5월 한정 얼리버드 · 첫 스터디 참가비 30% 할인
                </div>
                <h2 className="mt-5 font-display text-3xl md:text-5xl font-bold tracking-tight leading-[1.12]">
                  지금 시작하면,
                  <br />
                  <span className="text-[color:var(--color-accent-soft)]">4주 후 결과물</span>이 생깁니다.
                </h2>
                <p className="mt-5 text-paper-300 text-base md:text-lg leading-relaxed max-w-[58ch]">
                  AI는 배우는 속도보다 같이 배우는 환경이 더 중요합니다. 오늘 스터디를 찾아보세요. 3일 안에 팀이 만들어집니다.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a href="#" className="cta-btn magnetic inline-flex items-center justify-center gap-2 h-14 px-7 rounded-2xl bg-accent text-paper-50 font-semibold shadow-lift">
                    무료로 스터디 둘러보기
                    <Icon icon="solar:arrow-right-linear" />
                  </a>
                  <a href="#" className="inline-flex items-center justify-center gap-2 h-14 px-6 rounded-2xl border border-paper-600 text-paper-100 font-medium hover:bg-paper-700 transition">
                    내 스터디 직접 만들기
                  </a>
                </div>
                <p className="mt-4 text-xs text-paper-400">
                  부담 없이 둘러보세요. 가입하지 않아도 모든 스터디 목록을 볼 수 있습니다.
                </p>
              </div>

              <aside className="lg:col-span-5">
                <div className="glass-dark rounded-2xl p-6 text-paper-50">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-paper-300">이번 달 마감</span>
                    <span className="inline-flex items-center gap-1 text-xs text-[color:var(--color-accent-soft)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-accent-soft)] inline-block float-slow" />
                      마감 임박
                    </span>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs text-paper-400">남은 일수</div>
                      <div className="mt-1 font-display text-4xl font-bold num">D-6</div>
                    </div>
                    <div>
                      <div className="text-xs text-paper-400">잔여 자리</div>
                      <div className="mt-1 font-display text-4xl font-bold num">
                        11<span className="text-paper-400 text-base">석</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 pt-4 border-t border-white/10 text-sm text-paper-300 flex items-center gap-2">
                    <Icon icon="solar:shield-check-linear" className="text-[color:var(--color-accent-soft)]" />
                    7일 이내 환불 보장 · 매칭 실패 시 100% 환불
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-24" data-reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <div className="text-xs uppercase tracking-widest text-paper-400">자주 묻는 질문</div>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                궁금하실 만한 것들
              </h2>
              <p className="mt-4 text-paper-500 leading-relaxed">
                매칭, 환불, 운영까지. 시작 전에 흔히 물어보시는 것들을 모았습니다.
              </p>
            </div>
            <div className="lg:col-span-8 divide-y divide-paper-100 border-y border-paper-100">
              {[
                { q: "완전 초보자도 참여할 수 있나요?", a: "네. 입문 트랙은 기초 개념부터 시작하며, 매칭 시 수준을 정확히 맞추기 때문에 초보자끼리 모입니다." },
                { q: "스터디 매칭이 안 되면 어떻게 되나요?", a: "7일 이내 매칭이 성사되지 않으면 결제 금액 전액을 자동 환불합니다." },
                { q: "주당 학습 시간은 얼마나 되나요?", a: "평균 주 3.5시간이며, 미션 난이도에 따라 ±1시간 정도 차이가 납니다." },
                { q: "제가 직접 스터디를 만들 수도 있나요?", a: "가능합니다. 운영 도구가 모두 제공되며, 리더 평균 운영 부담은 주 15분 이하입니다." },
              ].map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="font-semibold text-paper-800">{f.q}</span>
                    <Icon icon="solar:alt-arrow-down-linear" className="text-paper-400 transition group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-paper-500 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-24 pt-10 border-t border-paper-100">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5">
              <div className="flex items-center gap-2 font-semibold">
                <span className="inline-flex w-7 h-7 rounded-full bg-paper-800 text-paper-50 items-center justify-center">
                  <Icon icon="solar:users-group-rounded-bold" className="text-[15px]" />
                </span>
                <span>같이끝내다</span>
              </div>
              <p className="mt-3 text-sm text-paper-500 leading-relaxed max-w-[40ch]">
                AI 공부, 의지가 아니라 환경의 문제입니다. 같이 끝내는 사람들과 4주 안에 결과물 하나를 완성하세요.
              </p>
            </div>
            <div className="md:col-span-3">
              <div className="text-xs uppercase tracking-widest text-paper-400">서비스</div>
              <ul className="mt-3 space-y-2 text-sm text-paper-600">
                <li><a href="#" className="hover:text-accent transition">스터디 찾기</a></li>
                <li><a href="#" className="hover:text-accent transition">스터디 만들기</a></li>
                <li><a href="#" className="hover:text-accent transition">요금제</a></li>
              </ul>
            </div>
            <div className="md:col-span-4">
              <div className="text-xs uppercase tracking-widest text-paper-400">새 모집 알림</div>
              <form
                className="mt-3 flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  (form.querySelector("input") as HTMLInputElement).value = "";
                  const tag = form.querySelector("span");
                  if (tag) tag.textContent = "등록되었습니다";
                }}
              >
                <input
                  type="email"
                  required
                  placeholder="이메일 주소"
                  className="flex-1 h-11 px-3 rounded-xl border border-paper-200 bg-white text-sm focus:outline-none focus:border-paper-700"
                />
                <button className="magnetic h-11 px-4 rounded-xl bg-paper-800 text-paper-50 text-sm font-semibold">
                  구독
                </button>
              </form>
              <span className="block mt-2 text-xs text-paper-400" />
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-paper-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-paper-400">
            <span>© 2026 같이끝내다 · 모든 권리 보유</span>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-paper-700 transition">이용약관</a>
              <a href="#" className="hover:text-paper-700 transition">개인정보 처리방침</a>
              <a href="#" className="hover:text-paper-700 transition">문의</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
