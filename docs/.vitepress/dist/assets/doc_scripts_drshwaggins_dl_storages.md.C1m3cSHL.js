import{_ as h,c as k,j as i,a,G as n,w as l,a5 as r,B as p,o as E}from"./chunks/framework.B5CpDqM0.js";const F=JSON.parse('{"title":"📦 dl_storages","description":"","frontmatter":{},"headers":[],"relativePath":"doc_scripts/drshwaggins/dl_storages.md","filePath":"doc_scripts/drshwaggins/dl_storages.md","lastUpdated":null}'),d={name:"doc_scripts/drshwaggins/dl_storages.md"};function o(g,s,y,A,c,D){const t=p("PluginTabsTab"),e=p("PluginTabs");return E(),k("div",null,[s[2]||(s[2]=i("h1",{id:"📦-dl-storages",tabindex:"-1"},[a("📦 dl_storages "),i("a",{class:"header-anchor",href:"#📦-dl-storages","aria-label":'Permalink to "📦 dl_storages"'},"​")],-1)),s[3]||(s[3]=i("p",null,[a("Documentation relating to the "),i("a",{href:"https://drshwaggins-scripts.tebex.io/package/5855834",target:"_blank",rel:"noreferrer"},"dl_storages"),a(".")],-1)),n(e,null,{default:l(()=>[n(t,{label:"PREVIEW"},{default:l(()=>s[0]||(s[0]=[i("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/JjLrjQpgcGM?si=AswNDJAGUQduWLI1",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,-1)])),_:1}),n(t,{label:"BUY"},{default:l(()=>s[1]||(s[1]=[i("p",null,[i("a",{href:"https://drshwaggins-scripts.tebex.io/package/5855834",target:"_blank",rel:"noreferrer"},"Buy the script")],-1)])),_:1})]),_:1}),s[4]||(s[4]=r(`<h2 id="_1-installation" tabindex="-1">1. Installation <a class="header-anchor" href="#_1-installation" aria-label="Permalink to &quot;1. Installation&quot;">​</a></h2><p>dl_storages works only with VORP.</p><p>To install dl_storages:</p><ul><li>Drag and drop the resource into your resources folder <ul><li><code>dl_storages</code></li></ul></li><li>Add this ensure in your server.cfg<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  ensure dl_storages</span></span></code></pre></div></li><li>Execute the SQL file <ul><li><code>storages.sql</code></li></ul></li><li>Now you can configure and translate the script as you like <ul><li><code>config.lua</code></li><li><code>translation.lua</code></li></ul></li><li>At the end <ul><li>Restart the server</li></ul></li></ul><p>If you have any problems, you can always open a ticket in the <a href="https://discord.gg/K9H27J5VaS" target="_blank" rel="noreferrer">DrShwaggins Discord</a>.</p><h2 id="_2-usage" tabindex="-1">2. Usage <a class="header-anchor" href="#_2-usage" aria-label="Permalink to &quot;2. Usage&quot;">​</a></h2><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p><h2 id="_3-for-developers" tabindex="-1">3. For developers <a class="header-anchor" href="#_3-for-developers" aria-label="Permalink to &quot;3. For developers&quot;">​</a></h2><details class="details custom-block"><summary>Config.lua</summary><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Config </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Config.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Locale</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;en&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Config.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">BackUpModelHash</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;p_storagebox01x&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Config.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DisableMarkers</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Config.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ArmoryMarkerR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 255</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Config.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ArmoryMarkerG</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 255</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Config.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ArmoryMarkerB</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 255</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Config.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ArmoryMarkerAlpha</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 255</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Config.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">AllowNonEmptyPickup</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Config.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">StorageItems</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    -- LARGE STORAGE BOX</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      item </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;large_storagebox&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- STORAGE ITEM USED IN INV TO PLACE THE STORAGE</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      modelHash </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;p_storagebox01x&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      storageSpace </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- max items allowed to store | Minimum Value = 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      allowWeapons </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- Are Weapons Allowed</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      jobAllowed </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sherrif&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;police&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- PLAYERS WITH THIS JOB DOESENT NEED THE PASSWORD TO OPEN THIS STORAGE TYPE</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      blacklistedItems </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;water&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- ITEMS AND WEAPONS WHO SHOULDNT BE ALLOWED IN THE STORAGE | if -1 no items are allowed (Weapons still allowed)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      itemLimits </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bread&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,amount</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- MAX 10 Bread Allowed in Storage</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      weaponLimits </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;WEAPON_REPEATER_CARBINE&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,amount</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- MAX 1 &#39;WEAPON_REPEATER_CARBINE&#39; Allowed in Storage</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    -- SMALL STORAGE BOX</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    -- {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    --   item = &quot;&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    --   modelHash = &quot;p_storagebox01x&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    --   storageSpace = 50,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    --   allowWeapons = false,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    --   jobAllowed = {&quot;&quot;},</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    --   blacklistedItems = {&quot;&quot;},</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    --</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    --   },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    --   weaponLimits = {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    --</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    --   },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    -- },</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    -- WEAPON CRATE</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    -- {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    --   item = &quot;&quot;,  -- STORAGE ITEM USED IN INV TO PLACE THE STORAGE</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    --   modelHash = &quot;p_storagebox01x&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    --   storageSpace = 5, -- max items allowed to store</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    --   allowWeapons = true,  -- Are Weapons Allowed</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    --   jobAllowed = {&quot;&quot;}, -- PLAYERS WITH THIS JOB DOESENT NEED THE PASSWORD TO OPEN THIS STORAGE TYPE</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    --   blacklistedItems = -1,  -- ITEMS AND WEAPONS WHO SHOULDNT BE ALLOWED IN THE STORAGE | if -1 no items are allowed (Weapons still allowed)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    --   itemLimits = {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    --</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    --   },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    --   weaponLimits = {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    --</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    --   },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    -- },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Config.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">StorageBags</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  -- SMALL BAG</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    item </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;small_bag&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- STORAGE ITEM USED IN INV TO PLACE THE STORAGE</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    storageSpace </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- max items allowed to store | Minimum Value = 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    allowWeapons </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- Are Weapons Allowed</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    blacklistedItems </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;water&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- ITEMS AND WEAPONS WHO SHOULDNT BE ALLOWED IN THE STORAGE | if -1 no items are allowed (Weapons still allowed)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    itemLimits </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bread&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,amount</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- MAX 10 Bread Allowed in Storage</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    weaponLimits </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;WEAPON_REPEATER_CARBINE&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,amount</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- MAX 1 &#39;WEAPON_REPEATER_CARBINE&#39; Allowed in Storage</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></details>`,9))])}const m=h(d,[["render",o]]);export{F as __pageData,m as default};
