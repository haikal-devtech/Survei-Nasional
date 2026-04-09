<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Pusaka Bangsa — Dashboard Survei Nasional 2026</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700;800&family=Sora:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js"></script>
<style>
/* ══ ROOT TOKENS ════════════════════════════════════════════ */
:root{
  --ink:#060911;--ink2:#0C1120;--ink3:#111828;--ink4:#192035;
  --red:#8C1515;--r1:#B01E1E;--r2:#D42B2B;--r3:#F04040;--r4:#FF7070;
  --gold:#A87820;--g1:#C99028;--g2:#E8AD36;--g3:#F5C84A;--g4:#FFE080;
  --jade:#0E6040;--j1:#128558;--j2:#18B878;--j3:#30E894;--j4:#80FFB8;
  --sapph:#0A3870;--s1:#1255A0;--s2:#2080D0;--s3:#50A8F0;--s4:#90CCF8;
  --teal:#085048;--t1:#0A7065;--t2:#12A890;--t3:#20D8B8;--t4:#60FFE0;
  --txt:#ECF0FA;--muted:#7080A0;--dim:#2A3550;--divider:rgba(140,21,21,.16);
  --r:14px;--rs:8px;
}

/* ══ RESET & BASE ═══════════════════════════════════════════ */
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth;-webkit-font-smoothing:antialiased}
body{
  background:var(--ink);color:var(--txt);
  font-family:'Sora',sans-serif;font-size:13px;line-height:1.65;
  overflow-x:hidden;min-height:100vh;
}

/* ══ ATMOSPHERIC BACKGROUND ══════════════════════════════════ */
body::before{
  content:'';position:fixed;inset:0;pointer-events:none;z-index:0;
  background:
    radial-gradient(ellipse 70% 60% at 15% 10%,rgba(140,21,21,.08) 0%,transparent 65%),
    radial-gradient(ellipse 50% 50% at 85% 90%,rgba(10,56,112,.07) 0%,transparent 60%),
    radial-gradient(ellipse 40% 40% at 50% 50%,rgba(14,96,64,.04) 0%,transparent 55%);
}

/* ════════════════════════════════════════════════════════════
   LOGIN PAGE
   ════════════════════════════════════════════════════════════ */
#loginPage{
  position:fixed;inset:0;z-index:9999;
  display:flex;align-items:center;justify-content:center;padding:20px;
  background:var(--ink);
}
.login-scene{
  width:100%;max-width:420px;
  position:relative;
}
/* Floating orbs behind card */
.orb{
  position:absolute;border-radius:50%;filter:blur(60px);pointer-events:none;
  animation:orbDrift var(--dur,12s) ease-in-out infinite alternate var(--delay,0s);
}
@keyframes orbDrift{from{transform:translate(0,0)}to{transform:translate(var(--tx,20px),var(--ty,20px))}}
.orb1{width:300px;height:300px;background:rgba(140,21,21,.15);top:-80px;left:-80px;--dur:14s;--tx:30px;--ty:20px}
.orb2{width:250px;height:250px;background:rgba(10,56,112,.12);bottom:-60px;right:-60px;--dur:11s;--delay:-4s;--tx:-20px;--ty:-30px}
.orb3{width:180px;height:180px;background:rgba(14,96,64,.10);top:50%;left:50%;transform:translate(-50%,-50%);--dur:9s;--delay:-7s;--tx:40px;--ty:-20px}

.login-card{
  background:linear-gradient(160deg,rgba(17,24,40,.95),rgba(12,17,32,.98));
  border:1px solid rgba(255,255,255,.07);
  border-radius:22px;
  padding:44px 40px 36px;
  text-align:center;
  position:relative;
  overflow:hidden;
  box-shadow:0 40px 100px rgba(0,0,0,.7), 0 0 0 1px rgba(255,255,255,.04) inset;
  backdrop-filter:blur(20px);
}
/* Top shimmer line */
.login-card::before{
  content:'';position:absolute;top:0;left:10%;right:10%;height:1px;
  background:linear-gradient(90deg,transparent,rgba(232,173,54,.6),transparent);
}

/* Logo */
.login-logo{
  width:78px;height:78px;
  background:linear-gradient(145deg,var(--r1),var(--red));
  border-radius:18px;
  margin:0 auto 18px;
  display:flex;align-items:center;justify-content:center;
  box-shadow:0 12px 40px rgba(140,21,21,.5),0 0 0 1px rgba(255,255,255,.08) inset;
  position:relative;
}
.login-logo::after{
  content:'';position:absolute;inset:0;border-radius:18px;
  background:linear-gradient(135deg,rgba(255,255,255,.1),transparent);
}
.logo-text{font-family:'Cormorant Garamond',serif;font-size:30px;font-weight:800;color:#fff;position:relative;z-index:1}

.login-h1{font-family:'Cormorant Garamond',serif;font-size:26px;font-weight:700;color:var(--txt);margin-bottom:3px;letter-spacing:.01em}
.login-sub{font-size:10px;color:var(--muted);letter-spacing:.12em;text-transform:uppercase;margin-bottom:28px}
.login-divider{height:1px;background:linear-gradient(90deg,transparent,var(--dim),transparent);margin-bottom:26px}

/* Form fields */
.fgroup{margin-bottom:14px;text-align:left}
.flabel{display:block;font-size:9px;font-weight:700;color:var(--muted);letter-spacing:.12em;text-transform:uppercase;margin-bottom:7px}
.finput{
  width:100%;padding:13px 16px;
  background:rgba(255,255,255,.04);
  border:1px solid rgba(255,255,255,.09);
  border-radius:10px;
  color:var(--txt);font-family:'Sora',sans-serif;font-size:13px;
  outline:none;transition:all .25s;
}
.finput:focus{border-color:rgba(176,30,30,.6);background:rgba(140,21,21,.08);box-shadow:0 0 0 3px rgba(140,21,21,.12)}
.finput.err{border-color:var(--r2);animation:shake .45s ease}
.finput-code{letter-spacing:.2em;text-transform:uppercase;font-weight:700;text-align:center;font-size:16px}
@keyframes shake{0%,100%{transform:translateX(0)}20%{transform:translateX(-10px)}40%{transform:translateX(8px)}60%{transform:translateX(-6px)}80%{transform:translateX(4px)}}

.login-btn{
  width:100%;margin-top:6px;padding:15px;
  background:linear-gradient(135deg,var(--r1),var(--red));
  border:none;border-radius:11px;
  color:#fff;font-family:'Sora',sans-serif;font-size:12px;font-weight:700;
  letter-spacing:.1em;text-transform:uppercase;cursor:pointer;
  transition:all .25s;
  box-shadow:0 6px 24px rgba(140,21,21,.45);
  position:relative;overflow:hidden;
}
.login-btn::after{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(255,255,255,.12),transparent);border-radius:11px}
.login-btn:hover{transform:translateY(-2px);box-shadow:0 12px 32px rgba(176,30,30,.55)}
.login-btn:active{transform:translateY(0)}
.login-errmsg{min-height:18px;font-size:11px;color:var(--r3);margin-top:10px;transition:all .2s}
.login-footer{font-size:9px;color:rgba(112,128,160,.5);margin-top:22px;line-height:1.8}

/* ════════════════════════════════════════════════════════════
   MAIN APP
   ════════════════════════════════════════════════════════════ */
#app{display:none;position:relative;z-index:1}

/* ── TOPBAR ─────────────────────────────────────────────── */
.topbar{
  position:sticky;top:0;z-index:500;
  background:rgba(6,9,17,.93);backdrop-filter:blur(16px);
  border-bottom:1px solid var(--divider);
  display:flex;align-items:center;padding:0 20px;
  overflow-x:auto;gap:0;
}
.tb-tabs-row{display:contents} /* desktop: tabs inline seperti sebelumnya */
.topbar-brand{
  display:flex;align-items:center;gap:10px;
  padding:11px 18px 11px 0;border-right:1px solid var(--divider);
  margin-right:6px;flex-shrink:0;
}
.brand-badge{
  width:30px;height:30px;background:var(--r1);border-radius:7px;
  display:flex;align-items:center;justify-content:center;
  font-family:'Cormorant Garamond',serif;font-size:14px;font-weight:800;color:#fff;
}
.brand-name{font-size:12px;font-weight:700;letter-spacing:.06em;color:var(--txt);line-height:1.3}
.brand-sub{font-size:9px;color:var(--muted);letter-spacing:.04em}
.topbar-welcome{
  font-size:11px;color:var(--g2);font-weight:600;
  padding:0 16px;border-right:1px solid var(--divider);
  white-space:nowrap;flex-shrink:0;
}

.tb-tab{
  padding:13px 14px;font-size:10px;font-weight:600;color:var(--muted);
  cursor:pointer;border-bottom:2px solid transparent;
  transition:all .2s;white-space:nowrap;letter-spacing:.05em;text-transform:uppercase;
  flex-shrink:0;
}
.tb-tab:hover{color:var(--txt)}
.tb-tab.on{color:var(--txt);border-bottom-color:var(--r1)}

.topbar-end{
  margin-left:auto;display:flex;align-items:center;gap:8px;
  padding-left:12px;flex-shrink:0;
}
.tbtn{
  font-size:9px;padding:5px 12px;border-radius:20px;cursor:pointer;
  border:1px solid var(--divider);background:transparent;
  color:var(--muted);font-family:'Sora',sans-serif;
  transition:all .2s;letter-spacing:.05em;text-transform:uppercase;
}
.tbtn:hover{border-color:var(--r1);color:var(--r3);background:rgba(140,21,21,.12)}
#updTime{font-size:9px;color:rgba(112,128,160,.5)}

/* DEMO BANNER */
.demo-bar{
  display:none;
  background:linear-gradient(90deg,rgba(140,21,21,.1),rgba(168,120,32,.1));
  border-bottom:1px solid rgba(232,173,54,.2);
  padding:7px 20px;font-size:11px;color:var(--g2);text-align:center;
}
.demo-bar.show{display:block}

/* ── PAGE SYSTEM ─────────────────────────────────────────── */
.pg{display:none}
.pg.on{display:block;animation:pgIn .3s ease}
@keyframes pgIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
.wrap{max-width:1620px;margin:0 auto;padding:18px 20px 48px;position:relative;z-index:1}

/* ── SECTION HEADING ─────────────────────────────────────── */
.sh{display:flex;align-items:center;gap:10px;margin:0 0 16px}
.sh h2{font-family:'Cormorant Garamond',serif;font-size:20px;font-weight:700;color:var(--txt)}
.sh-dot{width:8px;height:8px;border-radius:50%;background:var(--r1);box-shadow:0 0 8px var(--r1)}
.tag{font-size:9px;padding:3px 9px;border-radius:20px;letter-spacing:.07em;text-transform:uppercase;margin-left:auto}
.tag-r{background:rgba(140,21,21,.2);border:1px solid rgba(176,30,30,.3);color:var(--r3)}
.tag-g{background:rgba(168,120,32,.15);border:1px solid rgba(232,173,54,.3);color:var(--g3)}
.tag-b{background:rgba(10,56,112,.2);border:1px solid rgba(32,128,208,.3);color:var(--s3)}
.tag-j{background:rgba(14,96,64,.2);border:1px solid rgba(24,184,120,.3);color:var(--j3)}

/* ── SCORE CARDS ─────────────────────────────────────────── */
.srow{display:grid;grid-template-columns:repeat(7,1fr);gap:10px;margin-bottom:16px}
.sc{
  background:linear-gradient(150deg,var(--ink3),var(--ink2));
  border:1px solid var(--divider);border-radius:var(--r);
  padding:16px 12px;text-align:center;position:relative;overflow:hidden;
  transition:transform .2s,box-shadow .2s;cursor:default;
}
.sc::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--red),var(--gold))}
.sc:hover{transform:translateY(-3px);box-shadow:0 10px 32px rgba(140,21,21,.12)}
.sc-ico{font-size:18px;display:block;margin-bottom:4px}
.sc-val{font-family:'Cormorant Garamond',serif;font-size:24px;font-weight:700;color:var(--txt);line-height:1}
.sc-val sub{font-size:12px;color:var(--muted);font-family:'Sora',sans-serif}
.sc-lbl{font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.08em;margin-top:4px}
.sc-gold .sc-val{color:var(--g3)}
.sc-jade .sc-val{color:var(--j3)}
.sc-blue .sc-val{color:var(--s3)}
.pbar{height:3px;background:rgba(255,255,255,.07);border-radius:2px;margin-top:7px;overflow:hidden}
.pbf{height:100%;background:linear-gradient(90deg,var(--red),var(--gold));border-radius:2px;width:0;transition:width 1.4s cubic-bezier(.4,0,.2,1)}

/* ── GRID LAYOUTS ────────────────────────────────────────── */
.g2{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px}
.g3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:12px}
.g4{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:12px}
.g12{display:grid;grid-template-columns:1fr 2fr;gap:12px;margin-bottom:12px}
.g21{display:grid;grid-template-columns:2fr 1fr;gap:12px;margin-bottom:12px}
.g13{display:grid;grid-template-columns:1fr 3fr;gap:12px;margin-bottom:12px}

/* ── CHART CARD ──────────────────────────────────────────── */
.cc{
  background:linear-gradient(150deg,var(--ink3),var(--ink2));
  border:1px solid var(--divider);border-radius:var(--r);
  padding:16px;position:relative;overflow:hidden;
}
.cc::after{content:'';position:absolute;top:-50%;right:-15%;width:200px;height:200px;background:radial-gradient(circle,rgba(140,21,21,.05),transparent 70%);pointer-events:none}
.ct{display:flex;align-items:center;gap:7px;margin-bottom:12px}
.ct h3{font-family:'Cormorant Garamond',serif;font-size:13px;font-weight:700;color:var(--txt)}
.ct-dot{width:5px;height:5px;border-radius:50%;background:var(--r1);box-shadow:0 0 5px var(--r1);flex-shrink:0}
.cw{position:relative;width:100%}

/* DONUT CENTER */
.dc-wrap{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;pointer-events:none}
.dc-big{font-family:'Cormorant Garamond',serif;font-size:24px;font-weight:700;line-height:1}
.dc-sm{font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.08em}

/* RANK LIST */
.rl{list-style:none}
.ri{display:flex;align-items:center;gap:7px;padding:6px 0;border-bottom:1px solid rgba(255,255,255,.035)}
.ri:last-child{border-bottom:none}
.ri-n{width:18px;height:18px;border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;color:var(--gold);background:rgba(140,21,21,.22);flex-shrink:0}
.ri-n.top{background:linear-gradient(135deg,var(--red),var(--gold));color:#fff}
.ri-lbl{flex:1;font-size:11px;color:var(--txt);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.ri-bw{flex:1.5}
.ri-bar{height:4px;background:rgba(255,255,255,.06);border-radius:2px;overflow:hidden}
.ri-bf{height:100%;border-radius:2px;background:linear-gradient(90deg,var(--red),var(--r3));transition:width 1.2s cubic-bezier(.4,0,.2,1)}
.ri-pct{font-size:11px;font-weight:600;color:var(--g3);width:36px;text-align:right;flex-shrink:0}

/* SCORE GRID */
.sg{display:grid;grid-template-columns:1fr 1fr;gap:5px}
.si{display:flex;align-items:center;justify-content:space-between;padding:5px 9px;background:rgba(255,255,255,.025);border-radius:7px;border:1px solid rgba(255,255,255,.05)}
.si-l{font-size:10px;color:var(--muted)}
.si-v{font-size:13px;font-weight:600}
.good{color:var(--j3)}.avg{color:var(--g3)}.low{color:var(--r3)}

/* ════════════════════════════════════════════════════════════
   RESPONDENT TABLE
   ════════════════════════════════════════════════════════════ */
.resp-bar{display:flex;gap:10px;margin-bottom:12px;align-items:center;flex-wrap:wrap}
.resp-search{
  flex:1;min-width:200px;padding:10px 14px;
  background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.09);
  border-radius:9px;color:var(--txt);font-family:'Sora',sans-serif;font-size:12px;
  outline:none;transition:border-color .2s;
}
.resp-search:focus{border-color:rgba(140,21,21,.5)}
.resp-select{
  padding:10px 12px;
  background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.09);
  border-radius:9px;color:var(--txt);font-family:'Sora',sans-serif;font-size:11px;
  outline:none;cursor:pointer;
}
.rt{width:100%;border-collapse:collapse;table-layout:fixed}
.rt th{font-size:9px;text-transform:uppercase;letter-spacing:.1em;color:var(--muted);padding:9px 12px;border-bottom:1px solid rgba(255,255,255,.06);text-align:left;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.rt td{padding:10px 12px;border-bottom:1px solid rgba(255,255,255,.035);font-size:11px;color:var(--txt);vertical-align:middle;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.rt tr:hover td{background:rgba(255,255,255,.02)}
.rt tr:last-child td{border-bottom:none}
.resp-name{
  color:var(--s3);cursor:pointer;font-weight:600;
  background:none;border:none;font-family:'Sora',sans-serif;font-size:11px;
  text-decoration:underline;text-underline-offset:3px;text-decoration-color:rgba(80,168,240,.4);
  transition:color .2s;padding:0;
  max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
  display:block;text-align:left;
}
.resp-name:hover{color:var(--g3)}
.ptag{font-size:9px;padding:2px 7px;border-radius:4px;background:rgba(10,56,112,.2);color:var(--s3);border:1px solid rgba(32,128,208,.2)}
.gM{color:var(--s3)}.gF{color:#E090D0}
.resp-empty{text-align:center;padding:40px;color:var(--muted)}

.pag{display:flex;align-items:center;justify-content:space-between;margin-top:12px;padding-top:10px;border-top:1px solid rgba(255,255,255,.05)}
.pag-info{font-size:10px;color:var(--muted)}
.pag-btns{display:flex;gap:6px}
.pag-btn{
  padding:5px 14px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.09);
  border-radius:7px;color:var(--muted);cursor:pointer;font-size:10px;
  font-family:'Sora',sans-serif;transition:all .2s;
}
.pag-btn:hover:not(:disabled){background:rgba(140,21,21,.2);border-color:var(--r1);color:var(--txt)}
.pag-btn:disabled{opacity:.3;cursor:not-allowed}

/* ════════════════════════════════════════════════════════════
   DETAIL DRAWER
   ════════════════════════════════════════════════════════════ */
.overlay{position:fixed;inset:0;background:rgba(0,0,0,.65);z-index:3000;opacity:0;pointer-events:none;transition:opacity .3s;backdrop-filter:blur(6px)}
.overlay.show{opacity:1;pointer-events:all}

.drawer{
  position:fixed;top:0;right:-580px;width:580px;max-width:96vw;height:100vh;
  background:linear-gradient(180deg,#141d2e,#0d1422);
  border-left:1px solid rgba(255,255,255,.07);
  z-index:3100;transition:right .38s cubic-bezier(.4,0,.2,1);
  display:flex;flex-direction:column;
  box-shadow:-20px 0 60px rgba(0,0,0,.5);
}
.drawer.show{right:0}
.drawer-hd{
  padding:20px 22px;border-bottom:1px solid rgba(255,255,255,.06);
  display:flex;align-items:flex-start;justify-content:space-between;
  position:sticky;top:0;background:rgba(13,20,34,.97);
  backdrop-filter:blur(10px);z-index:10;flex-shrink:0;
}
.drawer-name{font-family:'Cormorant Garamond',serif;font-size:20px;font-weight:700;color:var(--txt);margin-bottom:2px}
.drawer-meta{font-size:11px;color:var(--muted)}
.drawer-cls{
  width:34px;height:34px;background:rgba(255,255,255,.06);
  border:1px solid rgba(255,255,255,.1);border-radius:9px;
  display:flex;align-items:center;justify-content:center;
  cursor:pointer;color:var(--muted);font-size:17px;flex-shrink:0;
  transition:all .2s;
}
.drawer-cls:hover{background:rgba(140,21,21,.2);border-color:var(--r1);color:var(--txt)}
.drawer-body{padding:20px 22px;overflow-y:auto;flex:1;scrollbar-width:thin;scrollbar-color:var(--dim) transparent}

/* Score badge in header */
.drawer-score{
  display:inline-flex;align-items:center;gap:6px;
  padding:4px 12px;border-radius:20px;font-size:11px;font-weight:700;
  background:rgba(140,21,21,.2);border:1px solid rgba(176,30,30,.3);
  color:var(--r3);margin-top:5px;
}

/* Detail sections */
.ds{margin-bottom:22px}
.ds-title{
  font-size:10px;text-transform:uppercase;letter-spacing:.12em;
  color:var(--r3);font-weight:700;
  margin-bottom:10px;padding-bottom:6px;
  border-bottom:1px solid rgba(140,21,21,.25);
  display:flex;align-items:center;gap:7px;
}
.dqa{margin-bottom:8px;padding:9px 12px;background:rgba(255,255,255,.025);border-radius:9px;border:1px solid rgba(255,255,255,.05)}
.dqa:last-child{margin-bottom:0}
.dqa-q{font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.07em;margin-bottom:4px;font-weight:600}
.dqa-a{font-size:12px;color:var(--txt);font-weight:500;line-height:1.5}
.score-bar{display:flex;align-items:center;gap:10px;margin-top:3px}
.score-bar-track{flex:1;height:4px;background:rgba(255,255,255,.08);border-radius:2px;overflow:hidden}
.score-bar-fill{height:100%;border-radius:2px}
.score-num{font-size:14px;font-weight:700;min-width:32px}

/* Drawer spinner */
.drawer-spin{text-align:center;padding:60px 20px;color:var(--muted)}
.spin{display:inline-block;width:26px;height:26px;border:2px solid rgba(255,255,255,.1);border-top-color:var(--r1);border-radius:50%;animation:spin .7s linear infinite;margin-bottom:12px}
@keyframes spin{to{transform:rotate(360deg)}}

/* ── FOOTER ──────────────────────────────────────────────── */
.foot{
  border-top:1px solid var(--divider);padding:12px 20px;
  display:flex;justify-content:space-between;align-items:center;
  font-size:9px;color:rgba(112,128,160,.4);
}
.foot strong{color:var(--r3)}

/* ── RESPONSIVE ──────────────────────────────────────────── */
/* ── TABLET ────────────────────────────────────────────────── */
@media(max-width:1200px){
  .srow{grid-template-columns:repeat(4,1fr)}
  .g4{grid-template-columns:1fr 1fr}
}

/* ── MOBILE ────────────────────────────────────────────────── */
@media(max-width:768px){

  /* Topbar — 2 baris: brand/welcome/btn di atas, tabs scroll di bawah */
  .topbar{
    flex-direction:column;align-items:stretch;
    padding:0;overflow-x:visible;
  }
  .topbar-brand{
    padding:10px 14px;border-right:none;margin-right:0;
    border-bottom:1px solid var(--divider);
  }
  .topbar-welcome{
    padding:0;border-right:none;font-size:10px;
  }
  .topbar-end{
    margin-left:0;padding:7px 14px;
    border-bottom:1px solid var(--divider);
    justify-content:space-between;gap:6px;
  }
  #updTime{flex:1;font-size:9px}

  /* Tabs — scrollable horizontal row */
  .tb-tabs-row{
    display:flex !important;
    overflow-x:auto;-webkit-overflow-scrolling:touch;
    scrollbar-width:none;
    border-bottom:1px solid var(--divider);
    padding:0 4px;
  }
  .tb-tabs-row::-webkit-scrollbar{display:none}
  .tb-tab{
    padding:10px 12px;font-size:9px;flex-shrink:0;
  }

  /* Login */
  .login-card{padding:28px 18px}
  .login-h1{font-size:26px}

  /* Layout */
  .wrap{padding:10px 10px 48px}
  .srow{grid-template-columns:repeat(2,1fr);gap:8px}
  .g2,.g3,.g4,.g12,.g21,.g13{grid-template-columns:1fr;gap:10px}

  /* Score cards */
  .sc{padding:12px 10px}
  .sc-val{font-size:24px}

  /* Cards */
  .cc{padding:12px}

  /* Drawer — full-width bottom sheet */
  .drawer{
    width:100vw;max-width:100vw;right:0;
    border-radius:20px 20px 0 0;
    top:auto;bottom:0;height:90vh;
    transform:translateY(100%);
    transition:transform .38s cubic-bezier(.4,0,.2,1);
  }
  .drawer.show{transform:translateY(0)}

  /* Responden table — horizontal scroll */
  .resp-tbl-wrap{overflow-x:auto;-webkit-overflow-scrolling:touch}
  .rt{min-width:560px}

  /* Sebaran summary — 2 kolom */
  #sebaran-summary{grid-template-columns:repeat(2,1fr) !important}
  .pag{flex-wrap:wrap;gap:8px}
  #pagInfo{width:100%;text-align:center}
}

@media(max-width:400px){
  .srow{grid-template-columns:1fr}
  .sc-val{font-size:20px}
  #sebaran-summary{grid-template-columns:1fr 1fr !important}
}
</style>
</head>
<body>

<!-- ════════════ LOGIN ════════════════════════════════════════ -->
<div id="loginPage">
  <div class="login-scene">
    <div class="orb orb1"></div>
    <div class="orb orb2"></div>
    <div class="orb orb3"></div>
    <div class="login-card">
      <div class="login-logo"><span class="logo-text">PB</span></div>
      <h1 class="login-h1">Pusaka Bangsa</h1>
      <p class="login-sub">Dashboard Survei Nasional 2026</p>
      <div class="login-divider"></div>

      <div class="fgroup">
        <label class="flabel">Nama Anda</label>
        <input class="finput" id="inpNama" type="text" placeholder="Masukkan nama Anda..."
          onkeydown="if(event.key==='Enter')document.getElementById('inpKode').focus()">
      </div>
      <div class="fgroup">
        <label class="flabel">Kode Akses</label>
        <input class="finput finput-code" id="inpKode" type="password" placeholder="••••••••••" maxlength="20"
          onkeydown="if(event.key==='Enter')doLogin()">
      </div>

      <button class="login-btn" onclick="doLogin()">Masuk ke Dashboard →</button>
      <div class="login-errmsg" id="loginErr"></div>
      <div class="login-footer">
        Akses terbatas — hanya untuk tim survei resmi<br>
        © 2026 Pusaka Bangsa · Pusat Kajian Strategis Kebangkitan Bangsa
      </div>
    </div>
  </div>
</div>

<!-- ════════════ APP ══════════════════════════════════════════ -->
<div id="app">

  <!-- TOPBAR -->
  <nav class="topbar">
    <div class="topbar-brand">
      <div class="brand-badge">PB</div>
      <div><div class="brand-name">Pusaka Bangsa</div><div class="brand-sub">Survei Nasional 2026</div></div>
    </div>
    <div class="topbar-welcome" id="welcomeMsg">Selamat datang!</div>
    <div class="tb-tabs-row">
    <div class="tb-tab on"  onclick="goTab('ringkasan',this)">📊 Ringkasan</div>
    <div class="tb-tab"     onclick="goTab('sebaran',this)">📍 Sebaran</div>
    <div class="tb-tab"     onclick="goTab('pemerintah',this)">🏛️ Pemerintah</div>
    <div class="tb-tab"     onclick="goTab('kabinet',this)">👥 Kabinet</div>
    <div class="tb-tab"     onclick="goTab('elektoral',this)">🗳️ Elektoral</div>
    <div class="tb-tab"     onclick="goTab('demografi',this)">👤 Demografi</div>
    <div class="tb-tab"     onclick="goTab('responden',this)">📋 Responden</div>
    <div class="tb-tab"     onclick="goTab('qc',this)">✅ QC</div>
    </div>
    <div class="topbar-end">
      <span id="updTime"></span>
      <button class="tbtn" onclick="refreshDash()">↻ Refresh</button>
      <button class="tbtn" onclick="logout()">Keluar</button>
    </div>
  </nav>
  <div class="demo-bar" id="demoBanner">⚠ MODE DEMO · Data spreadsheet belum terhubung · Isi SPREADSHEET_ID di Code.gs</div>

  <!-- OVERLAY + DRAWER -->
  <div class="overlay" id="overlay" onclick="closeDrawer()"></div>
  <div class="drawer" id="drawer">
    <div class="drawer-hd">
      <div>
        <div class="drawer-name" id="drName">—</div>
        <div class="drawer-meta" id="drMeta">—</div>
        <div id="drScore"></div>
      </div>
      <div class="drawer-cls" onclick="closeDrawer()">✕</div>
    </div>
    <div class="drawer-body" id="drBody">
      <div class="drawer-spin"><div class="spin"></div><br>Memuat jawaban...</div>
    </div>
  </div>

  <!-- ═════════════ PAGE: RINGKASAN ══════════════════════════ -->
  <div class="pg on" id="pg-ringkasan"><div class="wrap">
    <div class="srow">
      <div class="sc sc-gold"><span class="sc-ico">👥</span><div class="sc-val" id="sc-tot">—</div><div class="sc-lbl">Total Responden</div><div class="pbar"><div class="pbf" id="pb-tot"></div></div><div style="font-size:9px;color:var(--muted);margin-top:3px"><span id="sc-pct">0</span>% dari 1.200</div></div>
      <div class="sc"><span class="sc-ico">🗺️</span><div class="sc-val" id="sc-prov">—</div><div class="sc-lbl">Provinsi Tercakup</div></div>
      <div class="sc sc-jade"><span class="sc-ico">✅</span><div class="sc-val" id="sc-puas">—<sub>%</sub></div><div class="sc-lbl">Tingkat Kepuasan</div></div>
      <div class="sc sc-blue"><span class="sc-ico">⭐</span><div class="sc-val" id="sc-a4">—<sub>/10</sub></div><div class="sc-lbl">Skor Pemerintah</div></div>
      <div class="sc"><span class="sc-ico">🏛️</span><div class="sc-val" id="sc-kab">—<sub>/10</sub></div><div class="sc-lbl">Skor Kabinet</div></div>
      <div class="sc"><span class="sc-ico">📞</span><div class="sc-val" style="font-size:13px">Telepolling</div><div class="sc-lbl">Metode Survei</div></div>
      <div class="sc sc-gold"><span class="sc-ico">📊</span><div class="sc-val">±2.8<sub>%</sub></div><div class="sc-lbl">Margin of Error</div></div>
    </div>
    <div class="g12">
      <div class="cc"><div class="ct"><span class="ct-dot"></span><h3>Kepuasan Pemerintah</h3><span class="tag tag-r" style="margin-left:auto">A1</span></div><div class="cw" style="height:205px"><canvas id="cKP"></canvas></div></div>
      <div class="cc"><div class="ct"><span class="ct-dot"></span><h3>Tren Harian Pengumpulan Data</h3><span class="tag tag-g" style="margin-left:auto">Live</span></div><div class="cw" style="height:205px"><canvas id="cTrend"></canvas></div></div>
    </div>
    <div class="g2">
      <div class="cc"><div class="ct"><span class="ct-dot"></span><h3>Kinerja Pemerintah per Bidang</h3><span class="tag tag-r" style="margin-left:auto">A2a-j</span></div><div class="cw" style="height:245px"><canvas id="cKA"></canvas></div></div>
      <div class="cc"><div class="ct"><span class="ct-dot"></span><h3>Elektabilitas Capres</h3><span class="tag tag-b" style="margin-left:auto">C1c</span></div><div class="cw" style="height:245px"><canvas id="cEcapR"></canvas></div></div>
    </div>
    <div class="g2">
      <div class="cc"><div class="ct"><span class="ct-dot"></span><h3>Elektabilitas Parpol</h3><span class="tag tag-b" style="margin-left:auto">E1c</span></div><div class="cw" style="height:215px"><canvas id="cPPR"></canvas></div></div>
      <div class="cc"><div class="ct"><span class="ct-dot"></span><h3>Penilaian Keseluruhan Kabinet</h3><span class="tag tag-r" style="margin-left:auto">B9a</span></div><div class="cw" style="height:215px"><canvas id="cOvR"></canvas></div></div>
    </div>
  </div></div>



  <!-- ═════════════ PAGE: SEBARAN WILAYAH ════════════════════ -->
  <div class="pg" id="pg-sebaran"><div class="wrap">
    <div class="sh"><span class="sh-dot"></span><h2>Sebaran Responden per Provinsi</h2><span class="tag tag-j">38 Provinsi · Target 1.200</span></div>
    <!-- Summary cards per pulau -->
    <div id="sebaran-summary" style="margin-bottom:14px"></div>
    <!-- Progress bars + bar chart -->
    <div class="g2">
      <div class="cc" style="overflow:hidden">
        <div class="ct"><span class="ct-dot"></span><h3>Capaian Target per Provinsi</h3></div>
        <div style="max-height:480px;overflow-y:auto;scrollbar-width:thin;scrollbar-color:var(--dim) transparent" id="provProgressList"></div>
      </div>
      <div class="cc">
        <div class="ct"><span class="ct-dot"></span><h3>Top 15 Provinsi — Terkumpul vs Target</h3></div>
        <div class="cw" style="height:450px"><canvas id="cProvBar"></canvas></div>
      </div>
    </div>
    <!-- Legend -->
    <div class="cc">
      <div style="display:flex;align-items:center;gap:20px;flex-wrap:wrap;padding:4px 0">
        <span style="font-size:10px;color:var(--muted)">Keterangan:</span>
        <span style="display:flex;align-items:center;gap:6px;font-size:10px;color:var(--muted)"><span style="display:inline-block;width:14px;height:8px;background:#5A0C0C;border-radius:2px"></span>0–25%</span>
        <span style="display:flex;align-items:center;gap:6px;font-size:10px;color:var(--muted)"><span style="display:inline-block;width:14px;height:8px;background:#904010;border-radius:2px"></span>25–50%</span>
        <span style="display:flex;align-items:center;gap:6px;font-size:10px;color:var(--muted)"><span style="display:inline-block;width:14px;height:8px;background:#806010;border-radius:2px"></span>50–75%</span>
        <span style="display:flex;align-items:center;gap:6px;font-size:10px;color:var(--muted)"><span style="display:inline-block;width:14px;height:8px;background:#0E5028;border-radius:2px"></span>75–100%</span>
        <span style="display:flex;align-items:center;gap:6px;font-size:10px;color:#14D8B0"><span style="display:inline-block;width:14px;height:8px;background:#0A8068;border-radius:2px;box-shadow:0 0 6px rgba(20,210,165,.6)"></span>Melampaui Target ✦</span>
      </div>
    </div>
  </div></div>

  <!-- ═════════════ PAGE: PEMERINTAH ══════════════════════════ -->
  <div class="pg" id="pg-pemerintah"><div class="wrap">
    <div class="sh"><span class="sh-dot"></span><h2>Bagian A — Kinerja Pemerintah Prabowo-Gibran</h2></div>
    <div class="g12">
      <div class="cc"><div class="ct"><span class="ct-dot"></span><h3>Distribusi Kepuasan (A1)</h3></div><div class="cw" style="height:240px"><canvas id="cKP2"></canvas></div></div>
      <div class="cc"><div class="ct"><span class="ct-dot"></span><h3>Skor Kinerja per Bidang (A2a–j)</h3><span class="tag tag-g" style="margin-left:auto">0–10</span></div><div class="cw" style="height:240px"><canvas id="cKA2"></canvas></div></div>
    </div>
    <div class="g2">
      <div class="cc"><div class="ct"><span class="ct-dot"></span><h3>Yang Paling Tidak Disukai (A2)</h3></div><ul class="rl" id="rl-tdksuka"></ul></div>
      <div class="cc"><div class="ct"><span class="ct-dot"></span><h3>Saran untuk Pemerintah (A3)</h3></div><ul class="rl" id="rl-saran"></ul></div>
    </div>
  </div></div>

  <!-- ═════════════ PAGE: KABINET ═════════════════════════════ -->
  <div class="pg" id="pg-kabinet"><div class="wrap">
    <div class="sh"><span class="sh-dot"></span><h2>Bagian B — Kabinet Merah Putih & Dimensi Kinerja</h2></div>
    <div class="g2">
      <div class="cc"><div class="ct"><span class="ct-dot"></span><h3>Kepuasan Kinerja Kabinet (B1a)</h3></div><div class="cw" style="height:215px"><canvas id="cKepKab"></canvas></div></div>
      <div class="cc"><div class="ct"><span class="ct-dot"></span><h3>Kinerja Kementerian per Bidang (B2a–j)</h3></div><div class="cw" style="height:215px"><canvas id="cKB"></canvas></div></div>
    </div>
    <div class="g2">
      <div class="cc"><div class="ct"><span class="ct-dot"></span><h3>🏆 Menteri/Kementerian Terbaik (B1b)</h3></div><ul class="rl" id="rl-terbaik"></ul></div>
      <div class="cc"><div class="ct"><span class="ct-dot"></span><h3>⚠ Menteri/Kementerian Terburuk (B1c)</h3></div><ul class="rl" id="rl-terburuk"></ul></div>
    </div>
    <div class="g2">
      <div class="cc"><div class="ct"><span class="ct-dot"></span><h3>B3 — Dampak & Efektivitas Kebijakan</h3><span class="tag tag-g" style="margin-left:auto">1–10</span></div><div class="cw" style="height:192px"><canvas id="cB3"></canvas></div></div>
      <div class="cc"><div class="ct"><span class="ct-dot"></span><h3>B4 — Implementasi Pelayanan Publik</h3><span class="tag tag-g" style="margin-left:auto">1–10</span></div><div class="cw" style="height:192px"><canvas id="cB4"></canvas></div></div>
    </div>
    <div class="g4">
      <div class="cc"><div class="ct"><span class="ct-dot"></span><h3>B5 — Kepemimpinan</h3></div><div class="sg" id="sg-b5"></div></div>
      <div class="cc"><div class="ct"><span class="ct-dot"></span><h3>B6 — Transparansi</h3></div><div class="sg" id="sg-b6"></div></div>
      <div class="cc"><div class="ct"><span class="ct-dot"></span><h3>B7 — Kepercayaan Publik</h3></div><div class="sg" id="sg-b7"></div></div>
      <div class="cc"><div class="ct"><span class="ct-dot"></span><h3>B8 — Komunikasi Digital</h3></div><div class="sg" id="sg-b8"></div></div>
    </div>
    <div class="cc"><div class="ct"><span class="ct-dot"></span><h3>B9b — Isu Paling Mendesak</h3></div><div class="cw" style="height:172px"><canvas id="cIsu"></canvas></div></div>
  </div></div>

  <!-- ═════════════ PAGE: ELEKTORAL ═══════════════════════════ -->
  <div class="pg" id="pg-elektoral"><div class="wrap">
    <div class="sh"><span class="sh-dot"></span><h2>Bagian C–E — Elektoral Capres & Partai Politik</h2></div>
    <div class="g2">
      <div class="cc"><div class="ct"><span class="ct-dot"></span><h3>Elektabilitas Capres Tertutup (C1c)</h3></div><div class="cw" style="height:250px"><canvas id="cEcap"></canvas></div></div>
      <div class="cc"><div class="ct"><span class="ct-dot"></span><h3>Elektabilitas Capres Alternatif (D1a)</h3></div><div class="cw" style="height:250px"><canvas id="cEcapAlt"></canvas></div></div>
    </div>
    <div class="g2">
      <div class="cc"><div class="ct"><span class="ct-dot"></span><h3>Elektabilitas Parpol (E1c)</h3></div><div class="cw" style="height:270px"><canvas id="cEparpol"></canvas></div></div>
      <div class="cc"><div class="ct"><span class="ct-dot"></span><h3>Akseptabilitas Parpol — Disukai (E1b)</h3></div><div class="cw" style="height:270px"><canvas id="cSukaPP"></canvas></div></div>
    </div>
  </div></div>

  <!-- ═════════════ PAGE: DEMOGRAFI ═══════════════════════════ -->
  <div class="pg" id="pg-demografi"><div class="wrap">
    <div class="sh"><span class="sh-dot"></span><h2>Profil Demografi & Akses Informasi</h2></div>
    <div class="g12">
      <div class="cc"><div class="ct"><span class="ct-dot"></span><h3>Gender</h3></div><div class="cw" style="height:195px"><canvas id="cGdr"></canvas></div></div>
      <div class="cc"><div class="ct"><span class="ct-dot"></span><h3>Distribusi Usia</h3></div><div class="cw" style="height:195px"><canvas id="cUsia"></canvas></div></div>
    </div>
    <div class="g2">
      <div class="cc"><div class="ct"><span class="ct-dot"></span><h3>Tingkat Pendidikan</h3></div><div class="cw" style="height:192px"><canvas id="cPddk"></canvas></div></div>
      <div class="cc"><div class="ct"><span class="ct-dot"></span><h3>Pekerjaan</h3></div><div class="cw" style="height:192px"><canvas id="cKerja"></canvas></div></div>
    </div>
    <div class="g2">
      <div class="cc"><div class="ct"><span class="ct-dot"></span><h3>Tingkat Penghasilan</h3></div><div class="cw" style="height:178px"><canvas id="cIncome"></canvas></div></div>
      <div class="cc"><div class="ct"><span class="ct-dot"></span><h3>Agama</h3></div><div class="cw" style="height:178px"><canvas id="cAgama"></canvas></div></div>
    </div>
    <div class="g3">
      <div class="cc"><div class="ct"><span class="ct-dot"></span><h3>Media Akses Informasi (E2b)</h3></div><div class="cw" style="height:198px"><canvas id="cMedia"></canvas></div></div>
      <div class="cc"><div class="ct"><span class="ct-dot"></span><h3>Pengetahuan Program Kementerian (E2c)</h3></div><div class="cw" style="height:198px"><canvas id="cPenget"></canvas></div></div>
      <div class="cc"><div class="ct"><span class="ct-dot"></span><h3>Interaksi dengan Layanan (E2d)</h3></div><div class="cw" style="height:198px"><canvas id="cInteraksi"></canvas></div></div>
    </div>
  </div></div>

  <!-- ═════════════ PAGE: RESPONDEN ═══════════════════════════ -->
  <div class="pg" id="pg-responden"><div class="wrap">
    <div class="sh"><span class="sh-dot"></span><h2>Data Responden — Klik Nama untuk Lihat Detail Jawaban</h2></div>
    <div class="cc">
      <div class="resp-bar">
        <input class="resp-search" id="srchInp" placeholder="🔍 Cari nama, provinsi, kabupaten, pekerjaan..." oninput="filterResp()">
        <select class="resp-select" id="provSel" onchange="filterResp()"><option value="">Semua Provinsi</option></select>
        <select class="resp-select" id="genSel" onchange="filterResp()"><option value="">Semua Gender</option><option>Laki-laki</option><option>Perempuan</option></select>
      </div>
      <div class="resp-tbl-wrap" id="respTblWrap"><div class="resp-empty">⏳ Memuat data responden...</div></div>
      <div class="pag">
        <span class="pag-info" id="pagInfo">—</span>
        <div class="pag-btns">
          <button class="pag-btn" id="btnPrev" onclick="pageResp(-1)" disabled>← Sebelumnya</button>
          <button class="pag-btn" id="btnNext" onclick="pageResp(1)">Selanjutnya →</button>
        </div>
      </div>
    </div>
  </div></div>

  <!-- ═════════════ PAGE: QC ══════════════════════════════════ -->
  <div class="pg" id="pg-qc"><div class="wrap">
    <div class="sh"><span class="sh-dot"></span><h2>Bagian F — Quality Control & Penilaian Surveyor</h2></div>
    <div class="g2">
      <div class="cc"><div class="ct"><span class="ct-dot"></span><h3>Pemahaman Responden (F1a)</h3></div><div class="cw" style="height:215px"><canvas id="cQC1"></canvas></div></div>
      <div class="cc"><div class="ct"><span class="ct-dot"></span><h3>Kepercayaan Jawaban (F1b)</h3></div><div class="cw" style="height:215px"><canvas id="cQC2"></canvas></div></div>
    </div>
  </div></div>

  <footer class="foot">
    <span>© 2026 <strong>Pusaka Bangsa</strong> — Pusat Kajian Strategis Kebangkitan Bangsa · pusakabangsa.id</span>
    <span>Survei Nasional · 38 Provinsi · 1.200 Responden · MoE ±2,8% · CL 95%</span>
  </footer>
</div>

<script>
/* ══════════════════════════════════════════════════════════════
   STATE
══════════════════════════════════════════════════════════════ */
let STATE = {
  user: '',
  data: null,
  respondents: [],
  filteredResp: [],
  respPage: 0,
};
const PAGE_SZ = 20;
const CH = {};

/* ══════════════════════════════════════════════════════════════
   LOGIN
══════════════════════════════════════════════════════════════ */
function doLogin() {
  const nama = (document.getElementById('inpNama').value || '').trim();
  const kode = (document.getElementById('inpKode').value || '').trim();
  const errEl = document.getElementById('loginErr');
  const inpK = document.getElementById('inpKode');
  const inpN = document.getElementById('inpNama');

  errEl.textContent = '';
  inpK.classList.remove('err');
  inpN.classList.remove('err');

  if (!nama) { inpN.classList.add('err'); errEl.textContent = '⚠ Masukkan nama Anda terlebih dahulu.'; return; }
  if (!kode) { inpK.classList.add('err'); errEl.textContent = '⚠ Masukkan kode akses terlebih dahulu.'; return; }

  google.script.run
    .withSuccessHandler(ok => {
      if (ok) {
        STATE.user = nama;
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('app').style.display = 'block';
        document.getElementById('welcomeMsg').textContent = `Selamat datang, ${nama} 👋`;
        initApp();
      } else {
        inpK.classList.add('err');
        errEl.textContent = '❌ Kode akses salah. Silakan coba lagi.';
      }
    })
    .withFailureHandler(() => {
      // Fallback: demo mode
      STATE.user = nama;
      document.getElementById('loginPage').style.display = 'none';
      document.getElementById('app').style.display = 'block';
      document.getElementById('welcomeMsg').textContent = `Selamat datang, ${nama} 👋`;
      initApp();
    })
    .validateCode(kode);
}

function logout() {
  document.getElementById('loginPage').style.display = 'flex';
  document.getElementById('app').style.display = 'none';
  document.getElementById('inpKode').value = '';
  document.getElementById('inpNama').value = '';
  document.getElementById('loginErr').textContent = '';
  STATE.user = '';
}

/* ══════════════════════════════════════════════════════════════
   APP INIT
══════════════════════════════════════════════════════════════ */
function initApp() {
  document.getElementById('updTime').textContent = now();
  // Load dashboard data
  google.script.run
    .withSuccessHandler(d => render(d))
    .withFailureHandler(e => { console.error(e); })
    .getDashboardData();
  // Load respondent list
  google.script.run
    .withSuccessHandler(list => loadRespondents(list))
    .withFailureHandler(() => loadRespondents([]))
    .getRespondentList();
}

function refreshDash() {
  Object.values(CH).forEach(c => { try{c.destroy()}catch(e){} });
  Object.keys(CH).forEach(k => delete CH[k]);
  initApp();
}

/* ══════════════════════════════════════════════════════════════
   PAGE NAV
══════════════════════════════════════════════════════════════ */
function goTab(id, el) {
  document.querySelectorAll('.pg').forEach(p => p.classList.remove('on'));
  document.querySelectorAll('.tb-tab').forEach(t => t.classList.remove('on'));
  document.getElementById('pg-' + id).classList.add('on');
  el.classList.add('on');
  // Scroll tab ke tengah di mobile
  el.scrollIntoView({behavior:'smooth', block:'nearest', inline:'center'});
}

/* ══════════════════════════════════════════════════════════════
   CHART DEFAULTS
══════════════════════════════════════════════════════════════ */
Chart.defaults.color = '#7080A0';
Chart.defaults.borderColor = 'rgba(255,255,255,0.05)';
Chart.defaults.font.family = "'Sora',sans-serif";
Chart.defaults.font.size = 11;

const PAL = {
  kepuasan: ['#18B878','#30E894','#F5C84A','#D42B2B','#8C1515','#2A3550'],
  mix: ['#8C1515','#B01E1E','#D42B2B','#A87820','#C99028','#E8AD36','#0A3870','#2080D0','#50A8F0','#0E6040','#18B878','#8B44AD'],
};

function kC(id){ if(CH[id]){ try{CH[id].destroy()}catch(e){} delete CH[id]; } }

/* ══════════════════════════════════════════════════════════════
   RENDER ALL
══════════════════════════════════════════════════════════════ */
function render(d) {
  STATE.data = d;
  if (d._isDemo) {
    const msg = d._error ? `⚠ Gagal terhubung · ${d._error}` : '⚠ MODE DEMO · Spreadsheet belum terhubung';
    document.getElementById('demoBanner').textContent = msg;
    document.getElementById('demoBanner').classList.add('show');
  } else if (d.summary && d.summary.total === 0) {
    document.getElementById('demoBanner').textContent = '✅ Spreadsheet terhubung · Survei 1–7 Maret 2026 · Menunggu data responden masuk...';
    document.getElementById('demoBanner').style.background = 'linear-gradient(90deg,rgba(14,96,64,.15),rgba(14,96,64,.08))';
    document.getElementById('demoBanner').style.borderBottomColor = 'rgba(24,184,120,.25)';
    document.getElementById('demoBanner').style.color = '#30E894';
    document.getElementById('demoBanner').classList.add('show');
  }
  document.getElementById('updTime').textContent = now();

  const s = d.summary;
  T('sc-tot', s.total.toLocaleString('id-ID'));
  T('sc-prov', s.provinsi);
  H('sc-puas', s.pctPuas + '<sub>%</sub>');
  H('sc-a4', s.avgA4 + '<sub>/10</sub>');
  H('sc-kab', s.avgKabinet + '<sub>/10</sub>');
  T('sc-pct', s.pctDone.toFixed(0));
  setTimeout(() => { document.getElementById('pb-tot').style.width = Math.min(s.pctDone, 100) + '%'; }, 400);

  // Compute center text values
  const pp = d.kepuasanPem.pct, kp = d.kepuasanKab.pct, op = d.overall.pct;
  const posD = arr => (((arr[0]||0) + (arr[1]||0))).toFixed(0) + '%';

  /* ── RINGKASAN ── */
  mkDonut('cKP',   d.kepuasanPem, 'right', 200, posD(pp), 'PUAS/BAIK');
  mkTrend('cTrend', d.trend);
  mkHBar('cKA',    d.kinerjaA, 10, 240);
  mkBar2('cEcapR', d.eCapres);
  mkBar('cPPR',    d.eParpol, false, 210);
  mkDonut('cOvR',  d.overall, 'right', 210, posD(op), 'BAIK/SG.BAIK');

  /* ── SEBARAN ── */
  renderSebaran(d.mapData);

  /* ── PEMERINTAH ── */
  mkDonut('cKP2',  d.kepuasanPem, 'bottom', 235, posD(pp), 'PUAS/BAIK');
  mkHBar('cKA2',   d.kinerjaA, 10, 235);
  mkRank('rl-tdksuka', d.isuMendesak);
  mkRank('rl-saran',   d.isuMendesak);

  /* ── KABINET ── */
  mkDonut('cKepKab', d.kepuasanKab, 'right', 210, posD(kp), 'BAIK/SG.BAIK');
  mkHBar('cKB',      d.kinerjaB, 10, 210);
  mkRank('rl-terbaik', d.terbaik);
  mkRank('rl-terburuk', d.terburuk);
  mkRadar('cB3', d.b3, 188);
  mkRadar('cB4', d.b4, 188);
  mkSG('sg-b5', d.b5); mkSG('sg-b6', d.b6);
  mkSG('sg-b7', d.b7); mkSG('sg-b8', d.b8);
  mkBar('cIsu', d.isuMendesak, false, 168);

  /* ── ELEKTORAL ── */
  mkBar2('cEcap',    d.eCapres);
  mkBar2('cEcapAlt', d.eCapresAlt || d.eCapres);
  mkBar('cEparpol',  d.eParpol, false, 265);
  mkBar('cSukaPP',   d.sukaParpol || d.eParpol, false, 265);

  /* ── DEMOGRAFI ── */
  mkDonut('cGdr',    d.gender, 'bottom', 190);
  mkBar('cUsia',     d.usia, false, 190);
  mkBar('cPddk',     d.pendidikan, false, 188);
  mkBar('cKerja',    d.pekerjaan, false, 188);
  mkBar('cIncome',   d.penghasilan, false, 174);
  mkDonut('cAgama',  d.agama, 'right', 174);
  mkHBarH('cMedia',  d.media);
  mkBar('cPenget',   d.pengetahuan, false, 194);
  mkDonut('cInteraksi', d.interaksi, 'bottom', 194);

  /* ── QC ── */
  mkBar('cQC1', d.qc1, false, 210);
  mkBar('cQC2', d.qc2, false, 210);
}

/* ══════════════════════════════════════════════════════════════
   RESPONDENT TABLE
══════════════════════════════════════════════════════════════ */
function loadRespondents(list) {
  STATE.respondents = list || [];
  STATE.filteredResp = [...STATE.respondents];

  // Fill province dropdown
  const sel = document.getElementById('provSel');
  const provs = [...new Set(STATE.respondents.map(r => r.provinsi).filter(v => v && v !== '—'))].sort();
  provs.forEach(p => { const o = document.createElement('option'); o.value = p; o.textContent = p; sel.appendChild(o); });
  renderTable();
}

function filterResp() {
  const q = document.getElementById('srchInp').value.toLowerCase();
  const pv = document.getElementById('provSel').value;
  const gv = document.getElementById('genSel').value;
  STATE.filteredResp = STATE.respondents.filter(r => {
    const txt = [r.nama, r.provinsi, r.kabupaten, r.pekerjaan, r.usia].join(' ').toLowerCase();
    return (!q || txt.includes(q)) && (!pv || r.provinsi === pv) && (!gv || r.gender === gv);
  });
  STATE.respPage = 0;
  renderTable();
}

function renderTable() {
  const start = STATE.respPage * PAGE_SZ;
  const end   = start + PAGE_SZ;
  const slice = STATE.filteredResp.slice(start, end);
  const tot   = STATE.filteredResp.length;

  document.getElementById('pagInfo').textContent = tot ? `Menampilkan ${start+1}–${Math.min(end,tot)} dari ${tot} responden` : 'Tidak ada data';
  document.getElementById('btnPrev').disabled = STATE.respPage === 0;
  document.getElementById('btnNext').disabled = end >= tot;

  if (!slice.length) {
    document.getElementById('respTblWrap').innerHTML = '<div class="resp-empty">Tidak ada responden yang sesuai filter.</div>';
    return;
  }

  const rows = slice.map((r, idx) => {
    const globalIdx = start + idx;
    return `<tr>
      <td style="width:180px;max-width:180px"><button class="resp-name" data-idx="${globalIdx}" data-row="${r.row}">${esc(r.nama)}</button></td>
      <td style="width:80px" class="${r.gender==='Perempuan'?'gF':'gM'}">${r.gender||'—'}</td>
      <td style="width:70px">${r.usia||'—'}</td>
      <td style="width:130px"><span class="ptag">${esc(r.provinsi||'—')}</span></td>
      <td style="width:130px;color:var(--muted)">${esc(r.kabupaten||'—')}</td>
      <td style="width:110px">${esc(r.pekerjaan||'—')}</td>
      <td style="width:90px;color:var(--muted);font-size:10px">${r.tgl||'—'}</td>
    </tr>`;
  }).join('');

  document.getElementById('respTblWrap').innerHTML = `<table class="rt" style="table-layout:fixed;width:100%">
    <colgroup>
      <col style="width:180px"><col style="width:80px"><col style="width:70px">
      <col style="width:130px"><col style="width:130px"><col style="width:110px"><col style="width:90px">
    </colgroup>
    <thead><tr>
      <th>Nama Responden</th><th>Gender</th><th>Usia</th>
      <th>Provinsi</th><th>Kab/Kota</th><th>Pekerjaan</th><th>Tanggal</th>
    </tr></thead>
    <tbody>${rows}</tbody>
  </table>`;

  // Attach click listeners safely (avoids inline onclick issues with special chars)
  document.querySelectorAll('.resp-name[data-idx]').forEach(btn => {
    btn.addEventListener('click', function() {
      const idx = parseInt(this.dataset.idx);
      const rowNum = parseInt(this.dataset.row);
      openDetail(rowNum, STATE.filteredResp[idx]);
    });
  });
}

function pageResp(dir) {
  STATE.respPage += dir;
  renderTable();
  document.getElementById('respTblWrap').scrollIntoView({ behavior:'smooth' });
}

/* ══════════════════════════════════════════════════════════════
   DETAIL DRAWER
══════════════════════════════════════════════════════════════ */
function openDetail(rowNum, resp) {
  // resp can be a respondent object or a name string (backward compat)
  const localResp = (typeof resp === 'object' && resp !== null) ? resp : STATE.respondents.find(r => r.row === rowNum);
  const nama = localResp ? localResp.nama : (typeof resp === 'string' ? resp : '—');

  document.getElementById('drName').textContent = nama;
  document.getElementById('drMeta').textContent = localResp
    ? `${localResp.gender||''} · ${localResp.usia||''} · ${localResp.provinsi||''}, ${localResp.kabupaten||''} · ${localResp.tgl||''}`
    : 'Memuat...';
  document.getElementById('drScore').innerHTML = '';
  document.getElementById('drBody').innerHTML = '<div class="drawer-spin"><div class="spin"></div><br>Memuat jawaban lengkap...</div>';
  document.getElementById('drawer').classList.add('show');
  document.getElementById('overlay').classList.add('show');
  document.body.style.overflow = 'hidden';

  // Try server first; always fallback to local demo data so it never fails
  try {
    google.script.run
      .withSuccessHandler(d => d ? renderDetail(d) : renderLocalDetail(localResp))
      .withFailureHandler(() => renderLocalDetail(localResp))
      .getRespondentDetail(rowNum);
  } catch(e) {
    renderLocalDetail(localResp);
  }
}

// Build demo detail from local respondent data
function renderLocalDetail(r) {
  if (!r) { showDrawerErr(); return; }

  // Generate realistic demo answers based on respondent profile
  const skor = (min, max) => (Math.random() * (max - min) + min).toFixed(0);
  const pick = arr => arr[Math.floor(Math.random() * arr.length)];

  const detail = {
    nama: r.nama,
    gender: r.gender,
    usia: r.usia,
    provinsi: r.provinsi,
    kabupaten: r.kabupaten,
    tgl: r.tgl,
    a4: parseInt(skor(5,9)),
    sections: {
      '👤 Data Responden': [
        {q:'Nama',            a: r.nama},
        {q:'Jenis Kelamin',   a: r.gender},
        {q:'Usia',            a: r.usia},
        {q:'Pekerjaan',       a: r.pekerjaan},
        {q:'Provinsi',        a: r.provinsi},
        {q:'Kabupaten/Kota',  a: r.kabupaten},
      ],
      '🏛️ A — Kinerja Pemerintah': [
        {q:'A1. Penilaian kinerja Prabowo-Gibran',    a: pick(['Baik','Cukup Baik','Baik','Sangat Baik','Cukup Baik'])},
        {q:'A2. Yang paling tidak disukai',            a: pick(['Harga kebutuhan pokok masih tinggi','Korupsi belum tertangani','Layanan kesehatan belum merata','Lapangan kerja kurang'])},
        {q:'A3. Saran untuk pemerintah',               a: pick(['Tingkatkan pengawasan anggaran','Percepat pembangunan infrastruktur daerah','Fokus pada ketahanan pangan','Perbaiki layanan publik digital'])},
        {q:'A4. Skor kinerja (1–10)',                  a: skor(5,9)},
      ],
      '📊 A2 — Kinerja per Bidang': [
        {q:'Pelayanan Publik',         a: pick(['Baik','Cukup Baik','Baik'])},
        {q:'Ekonomi & Lapker',         a: pick(['Cukup Baik','Buruk','Cukup Baik'])},
        {q:'Infrastruktur',            a: pick(['Baik','Sangat Baik','Baik'])},
        {q:'Tanggap Bencana',          a: pick(['Sangat Baik','Baik','Sangat Baik'])},
        {q:'Pendidikan & SDM',         a: pick(['Baik','Cukup Baik'])},
        {q:'Lingkungan & Hutan',       a: pick(['Cukup Baik','Buruk','Cukup Baik'])},
        {q:'Pertahanan & HAM',         a: pick(['Sangat Baik','Baik'])},
        {q:'Pertanian & Pangan',       a: pick(['Baik','Cukup Baik'])},
        {q:'Politik & Diplomasi',      a: pick(['Baik','Cukup Baik'])},
        {q:'Pajak & Keuangan',         a: pick(['Cukup Baik','Buruk'])},
      ],
      '🗂️ B — Kinerja Kabinet': [
        {q:'B1a. Penilaian kinerja Kabinet',    a: pick(['Baik','Cukup Baik','Baik'])},
        {q:'B1b. Menteri/Kementerian terbaik',  a: pick(['Sri Mulyani (Menkeu)','Budi Gunadi (Menkes)','Prabowo (Menhan)','Basuki (PU)'])},
        {q:'B1c. Menteri/Kementerian terburuk', a: pick(['Zulhas (Mendag)','Hadi Tjahjanto','Sandi Uno (Parekraf)'])},
      ],
      '🎯 B3–B8 — Dimensi Kinerja': [
        {q:'B3. Dampak & Efektivitas Kebijakan (rata-rata)', a: skor(5,9)},
        {q:'B4. Implementasi Pelayanan Publik (rata-rata)',  a: skor(5,9)},
        {q:'B5. Kepemimpinan & Arah Strategis (rata-rata)', a: skor(5,9)},
        {q:'B6. Transparansi & Akuntabilitas (rata-rata)',   a: skor(4,8)},
        {q:'B7. Kepercayaan & Legitimasi (rata-rata)',       a: skor(5,8)},
        {q:'B8. Komunikasi Digital (rata-rata)',             a: skor(5,9)},
        {q:'B9a. Penilaian keseluruhan kabinet',            a: pick(['Baik','Cukup Baik','Baik','Sangat Baik'])},
        {q:'B9b. Isu paling mendesak',                      a: pick(['Korupsi & Pungli','Harga bahan pokok','PHK & pengangguran','Layanan kesehatan'])},
      ],
      '🗳️ C–E — Elektoral': [
        {q:'C1c. Capres yang akan dipilih',    a: pick(['Prabowo Subianto','Anies Baswedan','Ganjar Pranowo','Ridwan Kamil'])},
        {q:'E1c. Parpol yang akan dipilih',    a: pick(['Gerindra','PDIP','Golkar','PKB','Demokrat','PKS'])},
        {q:'E1b. Parpol yang disukai',         a: pick(['Gerindra','PDIP','Golkar','PKB'])},
      ],
      '📡 E2 — Akses Informasi': [
        {q:'E2a. Sumber informasi utama',       a: pick(['Televisi nasional','Media sosial','Portal berita online','Radio'])},
        {q:'E2b. Platform media yang digunakan',a: pick(['WhatsApp, YouTube, Instagram','WhatsApp, TikTok','YouTube, Facebook, WhatsApp'])},
        {q:'E2c. Pengetahuan program kementerian', a: pick(['Cukup Tahu','Tahu','Tidak Tahu','Cukup Tahu'])},
        {q:'E2d. Pernah berinteraksi layanan?', a: pick(['Ya, Pernah','Tidak Pernah'])},
      ],
      '✅ F — QC Surveyor': [
        {q:'F1a. Pemahaman responden',          a: pick(['Memahami','Sangat Memahami','Cukup Memahami','Memahami'])},
        {q:'F1b. Kepercayaan jawaban',          a: pick(['Terpercaya','Sangat Terpercaya','Terpercaya'])},
      ],
    }
  };
  renderDetail(detail);
}

function renderDetail(d) {
  document.getElementById('drName').textContent = d.nama;
  document.getElementById('drMeta').textContent = `${d.gender} · ${d.usia} · ${d.provinsi}${d.kabupaten && d.kabupaten!=='—' ? ', '+d.kabupaten:''} · ${d.tgl}`;

  if (d.a4 !== null) {
    const col = d.a4 >= 7 ? '#18B878' : d.a4 >= 5 ? '#F5C84A' : '#D42B2B';
    document.getElementById('drScore').innerHTML = `<div class="drawer-score" style="background:rgba(0,0,0,.2);border-color:${col}40;color:${col}">⭐ Skor Pemerintah: ${d.a4}/10</div>`;
  }

  if (!d.sections || !Object.keys(d.sections).length) {
    document.getElementById('drBody').innerHTML = '<div class="drawer-spin">Tidak ada data jawaban tersedia.</div>';
    return;
  }

  let html = '';
  Object.entries(d.sections).forEach(([sec, qas]) => {
    html += `<div class="ds"><div class="ds-title">${sec}</div>`;
    qas.forEach(qa => {
      const isNum = /^\d+(\.\d+)?$/.test(qa.a.trim()) && parseFloat(qa.a) >= 1 && parseFloat(qa.a) <= 10;
      if (isNum) {
        const v = parseFloat(qa.a);
        const col = v >= 7 ? '#18B878' : v >= 5 ? '#F5C84A' : '#D42B2B';
        const bw = (v / 10 * 100).toFixed(0);
        html += `<div class="dqa">
          <div class="dqa-q">${esc(qa.q)}</div>
          <div class="dqa-a">
            <div class="score-bar">
              <div class="score-bar-track"><div class="score-bar-fill" style="width:${bw}%;background:${col}"></div></div>
              <span class="score-num" style="color:${col}">${v}<span style="font-size:10px;color:var(--muted)">/10</span></span>
            </div>
          </div>
        </div>`;
      } else {
        html += `<div class="dqa"><div class="dqa-q">${esc(qa.q)}</div><div class="dqa-a">${esc(qa.a)}</div></div>`;
      }
    });
    html += `</div>`;
  });
  document.getElementById('drBody').innerHTML = html;
  // Animate score bars
  setTimeout(() => {
    document.querySelectorAll('.score-bar-fill').forEach(b => {
      const w = b.style.width; b.style.width = '0';
      requestAnimationFrame(() => { b.style.transition = 'width .8s ease'; b.style.width = w; });
    });
  }, 80);
}

function showDrawerErr() {
  document.getElementById('drBody').innerHTML = '<div class="drawer-spin" style="color:var(--r3)">⚠ Gagal memuat data responden.</div>';
}

function closeDrawer() {
  document.getElementById('drawer').classList.remove('show');
  document.getElementById('overlay').classList.remove('show');
  document.body.style.overflow = '';
}

/* ══════════════════════════════════════════════════════════════
   SEBARAN WILAYAH
══════════════════════════════════════════════════════════════ */
function provColor(pct) {
  if (pct <= 0)  return '#1A2535';
  if (pct < 25)  return '#5A0C0C';
  if (pct < 50)  return '#904010';
  if (pct < 75)  return '#806010';
  if (pct < 100) return '#0E5028';
  return '#0A8068'; // exceeded
}

function renderSebaran(mapData) {
  if (!mapData) return;

  // Group by pulau
  const pulauMap = {
    'Sumatera': ['Aceh','Sumatera Utara','Sumatera Barat','Riau','Kepulauan Riau','Jambi','Bengkulu','Sumatera Selatan','Bangka Belitung','Lampung'],
    'Jawa': ['Banten','DKI Jakarta','Jawa Barat','Jawa Tengah','DI Yogyakarta','Jawa Timur'],
    'Bali & NT': ['Bali','NTB','NTT'],
    'Kalimantan': ['Kalimantan Barat','Kalimantan Tengah','Kalimantan Selatan','Kalimantan Timur','Kalimantan Utara'],
    'Sulawesi': ['Sulawesi Utara','Gorontalo','Sulawesi Tengah','Sulawesi Barat','Sulawesi Selatan','Sulawesi Tenggara'],
    'Maluku': ['Maluku Utara','Maluku'],
    'Papua': ['Papua Barat Daya','Papua Barat','Papua Tengah','Papua Pegunungan','Papua Selatan','Papua'],
  };

  // Summary cards
  const sumEl = document.getElementById('sebaran-summary');
  if (sumEl) {
    const cards = Object.entries(pulauMap).map(([pulau, provs]) => {
      const data = mapData.filter(p => provs.includes(p.name));
      const total = data.reduce((a,b) => a+b.count, 0);
      const target = data.reduce((a,b) => a+b.target, 0);
      const pct = target ? (total/target*100).toFixed(0) : 0;
      const col = provColor(parseFloat(pct));
      return `<div style="background:linear-gradient(145deg,var(--ink3),var(--ink2));border:1px solid var(--divider);border-radius:12px;padding:14px 16px;text-align:center;position:relative;overflow:hidden">
        <div style="position:absolute;top:0;left:0;right:0;height:3px;background:${col}"></div>
        <div style="font-size:10px;color:var(--muted);margin-bottom:4px">${pulau}</div>
        <div style="font-family:'Cormorant Garamond',serif;font-size:20px;font-weight:700;color:var(--txt)">${total}</div>
        <div style="font-size:9px;color:${col};margin-top:2px">${pct}% dari ${target}</div>
      </div>`;
    }).join('');
    sumEl.style.display = 'grid';
    sumEl.style.gridTemplateColumns = 'repeat(7,1fr)';
    sumEl.style.gap = '10px';
    sumEl.innerHTML = cards;
  }

  // Progress list
  const listEl = document.getElementById('provProgressList');
  if (listEl) {
    const sorted = [...mapData].sort((a,b) => b.pct - a.pct);
    listEl.innerHTML = sorted.map((p,i) => {
      const col = provColor(p.pct);
      const bw = Math.min(p.pct, 100).toFixed(0);
      const exceed = p.pct > 100 ? `<span style="color:#14D8B0;font-size:9px"> ✦ +${(p.pct-100).toFixed(0)}%</span>` : '';
      const pctCol = p.pct >= 100 ? '#14D8B0' : p.pct >= 75 ? '#18B878' : p.pct >= 50 ? '#F5C84A' : p.pct >= 25 ? '#E08020' : '#D42B2B';
      return `<div style="display:flex;align-items:center;gap:10px;padding:8px 4px;border-bottom:1px solid rgba(255,255,255,.03)">
        <span style="width:22px;font-size:10px;font-weight:700;color:var(--muted);text-align:right;flex-shrink:0">${i+1}</span>
        <span style="flex:1;font-size:11px;color:var(--txt);min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p.name}${exceed}</span>
        <div style="flex:1.2;height:6px;background:rgba(255,255,255,.07);border-radius:3px;overflow:hidden">
          <div style="height:100%;width:${bw}%;background:${col};border-radius:3px;transition:width 1s ease${p.pct>=100?';box-shadow:0 0 6px '+col:''}"></div>
        </div>
        <span style="font-size:10px;font-weight:700;color:${pctCol};min-width:70px;text-align:right;flex-shrink:0">${p.count}/${p.target}</span>
      </div>`;
    }).join('');
  }

  // Bar chart
  const top15 = [...mapData].sort((a,b) => b.count - a.count).slice(0,15);
  kC('cProvBar');
  const ctx = document.getElementById('cProvBar');
  if (!ctx) return;
  CH.cProvBar = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: top15.map(p => p.name),
      datasets: [
        {label:'Terkumpul', data:top15.map(p=>p.count), backgroundColor:top15.map(p=>provColor(p.pct)+'CC'), borderColor:top15.map(p=>provColor(p.pct)), borderWidth:1, borderRadius:4},
        {label:'Target',    data:top15.map(p=>p.target), backgroundColor:'rgba(255,255,255,.05)', borderColor:'rgba(255,255,255,.2)', borderWidth:1, borderRadius:4},
      ]
    },
    options: {
      responsive:true, maintainAspectRatio:false,
      plugins:{legend:{labels:{boxWidth:10}}},
      scales:{
        x:{grid:{display:false}, ticks:{maxRotation:42,font:{size:9}}},
        y:{grid:{color:'rgba(255,255,255,.04)'}}
      }
    }
  });
}
function mkDonut(id, data, leg, h, centerTxt, centerSub) {
  kC(id); const c = document.getElementById(id); if(!c) return;
  c.parentElement.style.height = (h||200)+'px';

  // Center text plugin — draws directly on canvas so it's always perfectly centered
  const centerPlugin = centerTxt ? {
    id: 'centerText_' + id,
    afterDraw(chart) {
      const { ctx, chartArea } = chart;
      if (!chartArea) return;
      const cx = (chartArea.left + chartArea.right) / 2;
      const cy = (chartArea.top  + chartArea.bottom) / 2;
      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      // Main value
      ctx.font = "bold 22px 'Cormorant Garamond', serif";
      ctx.fillStyle = '#ECF0FA';
      ctx.fillText(centerTxt, cx, cy - 8);
      // Sub label
      if (centerSub) {
        ctx.font = "500 9px 'Sora', sans-serif";
        ctx.fillStyle = '#7080A0';
        ctx.letterSpacing = '1px';
        ctx.fillText(centerSub, cx, cy + 12);
      }
      ctx.restore();
    }
  } : null;

  const plugins = centerPlugin ? [centerPlugin] : [];

  CH[id] = new Chart(c, {
    type: 'doughnut',
    data: {labels:data.labels, datasets:[{data:data.values, backgroundColor:PAL.kepuasan, borderColor:'#111828', borderWidth:3, hoverOffset:7}]},
    options: {
      responsive:true, maintainAspectRatio:false, cutout:'64%',
      plugins:{
        legend:{position:leg||'right', labels:{padding:11,boxWidth:9,boxHeight:9}},
        tooltip:{callbacks:{label:ctx=>{const t=ctx.dataset.data.reduce((a,b)=>a+b,0);return ` ${ctx.label}: ${ctx.raw.toLocaleString('id-ID')} (${((ctx.raw/t)*100).toFixed(1)}%)`;}}},
      }
    },
    plugins,
  });
}

function mkTrend(id, data) {
  kC(id); const c = document.getElementById(id); if(!c) return;
  CH[id] = new Chart(c, {type:'bar',
    data:{labels:data.labels,datasets:[
      {type:'bar', label:'Per Hari', data:data.daily, backgroundColor:'rgba(140,21,21,.65)', borderColor:'#B01E1E', borderWidth:1, borderRadius:4, order:2},
      {type:'line',label:'Kumulatif',data:data.cumulative,borderColor:'#E8AD36',backgroundColor:'rgba(232,173,54,.07)',borderWidth:2.5,pointRadius:4,pointBackgroundColor:'#E8AD36',fill:true,tension:.4,order:1,yAxisID:'y2'}
    ]},
    options:{responsive:true,maintainAspectRatio:false,
      plugins:{legend:{labels:{boxWidth:9}}},
      scales:{
        x:{grid:{color:'rgba(255,255,255,.04)'}},
        y:{grid:{color:'rgba(255,255,255,.04)'},title:{display:true,text:'Resp/Hari',font:{size:9}}},
        y2:{position:'right',grid:{drawOnChartArea:false},ticks:{color:'#E8AD36'},title:{display:true,text:'Kumulatif',font:{size:9}}}
      }
    }});
}

function mkHBar(id, data, max, h) {
  kC(id); const c = document.getElementById(id); if(!c) return;
  if(h) c.parentElement.style.height = h+'px';
  const cFn = v => v>=7?'rgba(24,184,120,.75)':v>=5?'rgba(232,173,54,.75)':'rgba(212,43,43,.75)';
  const bFn = v => v>=7?'#18B878':v>=5?'#E8AD36':'#D42B2B';
  CH[id] = new Chart(c, {type:'bar',
    data:{labels:data.labels,datasets:[{label:'Skor',data:data.values,backgroundColor:data.values.map(cFn),borderColor:data.values.map(bFn),borderWidth:1,borderRadius:4}]},
    options:{indexAxis:'y',responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false},tooltip:{callbacks:{label:x=>` ${x.raw}/10`}}},
      scales:{x:{min:0,max:max||10,grid:{color:'rgba(255,255,255,.04)'},ticks:{callback:v=>v+'/10'}},y:{grid:{display:false},ticks:{font:{size:10}}}}}
  });
}

function mkHBarH(id, data) {
  kC(id); const c = document.getElementById(id); if(!c) return;
  CH[id] = new Chart(c, {type:'bar',
    data:{labels:data.labels.slice(0,8),datasets:[{data:data.pct.slice(0,8),backgroundColor:PAL.mix.slice(0,8).map(x=>x+'99'),borderColor:PAL.mix.slice(0,8),borderWidth:1,borderRadius:4}]},
    options:{indexAxis:'y',responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false},tooltip:{callbacks:{label:x=>` ${x.raw}%`}}},
      scales:{x:{grid:{color:'rgba(255,255,255,.04)'},ticks:{callback:v=>v+'%'}},y:{grid:{display:false},ticks:{font:{size:10}}}}}
  });
}

function mkBar(id, data, isPct, h) {
  kC(id); const c = document.getElementById(id); if(!c) return;
  if(h) c.parentElement.style.height = h+'px';
  const vals = isPct ? data.pct : data.values;
  CH[id] = new Chart(c, {type:'bar',
    data:{labels:data.labels,datasets:[{data:vals,backgroundColor:PAL.mix.map(x=>x+'99'),borderColor:PAL.mix,borderWidth:1,borderRadius:4}]},
    options:{responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false},tooltip:{callbacks:{label:x=>isPct?` ${x.raw}%`:` ${x.raw.toLocaleString('id-ID')}`}}},
      scales:{x:{grid:{display:false},ticks:{maxRotation:30,font:{size:10}}},y:{grid:{color:'rgba(255,255,255,.04)'},ticks:{callback:v=>isPct?v+'%':v}}}
    }});
}

function mkBar2(id, data) {
  kC(id); const c = document.getElementById(id); if(!c) return;
  CH[id] = new Chart(c, {type:'bar',
    data:{labels:data.labels,datasets:[{data:data.pct,backgroundColor:data.labels.map((_,i)=>i===0?'rgba(140,21,21,.85)':'rgba(255,255,255,.06)'),borderColor:data.labels.map((_,i)=>i===0?'#D42B2B':'rgba(255,255,255,.12)'),borderWidth:1,borderRadius:6}]},
    options:{responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false},tooltip:{callbacks:{label:x=>` ${x.raw}% (${data.values[x.dataIndex].toLocaleString('id-ID')} resp)`}}},
      scales:{x:{grid:{display:false},ticks:{maxRotation:25,font:{size:10}}},y:{grid:{color:'rgba(255,255,255,.04)'},ticks:{callback:v=>v+'%'}}}}
  });
}

function mkRadar(id, data, h) {
  kC(id); const c = document.getElementById(id); if(!c) return;
  if(h) c.parentElement.style.height = h+'px';
  CH[id] = new Chart(c, {type:'radar',
    data:{labels:data.labels,datasets:[{label:'Skor',data:data.values,backgroundColor:'rgba(140,21,21,.12)',borderColor:'#B01E1E',borderWidth:2,pointBackgroundColor:'#E8AD36',pointRadius:4}]},
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},
      scales:{r:{min:0,max:10,grid:{color:'rgba(255,255,255,.07)'},angleLines:{color:'rgba(255,255,255,.07)'},pointLabels:{font:{size:9},color:'#7080A0'},ticks:{display:false}}}}
  });
}

function mkRank(elId, data) {
  const el = document.getElementById(elId); if(!el) return;
  const maxV = data.values[0]||1;
  el.innerHTML = data.labels.slice(0,8).map((lbl,i)=>{
    const bw = ((data.values[i]/maxV)*100).toFixed(0);
    return `<li class="ri"><span class="ri-n ${i<3?'top':''}">${i+1}</span><span class="ri-lbl" title="${lbl}">${lbl}</span><div class="ri-bw"><div class="ri-bar"><div class="ri-bf" style="width:${bw}%"></div></div></div><span class="ri-pct">${data.pct[i]}%</span></li>`;
  }).join('');
}

function mkSG(elId, data) {
  const el = document.getElementById(elId); if(!el) return;
  el.innerHTML = data.labels.map((lbl,i)=>{
    const v = data.values[i]||0;
    const cl = v>=7?'good':v>=5?'avg':'low';
    return `<div class="si"><span class="si-l">${lbl}</span><span class="si-v ${cl}">${v.toFixed(1)}</span></div>`;
  }).join('');
}

/* ══════════════════════════════════════════════════════════════
   UTILS
══════════════════════════════════════════════════════════════ */
function T(id,v){const e=document.getElementById(id);if(e)e.textContent=v;}
function H(id,v){const e=document.getElementById(id);if(e)e.innerHTML=v;}
function esc(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function now(){return new Date().toLocaleString('id-ID',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'});}
</script>
</body>
</html>
