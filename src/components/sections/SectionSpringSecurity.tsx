import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { CodeBlock } from '../ui/CodeBlock';
import {
  springSecurityConcepts,
  codeExamples,
  authFlowSteps,
  apiSecurityConcepts
} from '../../data/springSecurityData';
import { Shield, KeyRound, Lock, ArrowRight, Server, Globe, CheckCircle2 } from 'lucide-react';

export const SectionSpringSecurity: React.FC = () => {
  return (
    <section id="security-section" className="py-12 border-t border-blue-100 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeader
          badge="TOPIC 02"
          title="Spring Security & Securing REST APIs"
          subtitle="Application-level security framework ensuring authentication, authorization, and endpoint protection for enterprise Java applications."
          icon={<Shield className="h-3.5 w-3.5" />}
        />

        {/* Framework Purpose & Core Concepts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-blue-600 dark:text-blue-400 font-bold text-sm mb-2">
                <Shield className="h-5 w-5" />
                <span>Purpose of Spring Security</span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
                {springSecurityConcepts.definition}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {springSecurityConcepts.purpose}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-blue-50 dark:border-slate-800">
              <span className="text-[11px] font-bold text-blue-800 dark:text-slate-400 uppercase tracking-wider block mb-1">
                Auto-Configuration
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Adding the starter dependency brings in the <code className="font-mono text-blue-600 dark:text-blue-400 font-semibold">SecurityAutoConfiguration</code> class containing initial security configurations.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-slate-800 shadow-sm space-y-4">
            <h4 className="text-sm font-bold text-blue-950 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <KeyRound className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span>Authentication vs. Authorization</span>
            </h4>
            {springSecurityConcepts.coreAreas.map(area => (
              <div key={area.name} className="p-3.5 rounded-xl bg-blue-50/50 dark:bg-slate-800/60 border border-blue-100 dark:border-slate-700">
                <span className="font-bold text-xs text-blue-800 dark:text-blue-300 block mb-0.5">
                  {area.name}
                </span>
                <p className="text-xs text-slate-700 dark:text-slate-300">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Request-Response Flow Diagram */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-slate-800 shadow-sm mb-10">
          <h4 className="text-sm font-bold text-blue-950 dark:text-white uppercase tracking-wider mb-2 flex items-center gap-2">
            <Lock className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span>Spring Security Request Flow Architecture</span>
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 mb-6">
            Visual progression of an incoming REST API request through security filter interception, authentication, authorization, and controller execution.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 relative">
            {authFlowSteps.map((step) => (
              <div
                key={step.step}
                className="p-3.5 rounded-xl bg-blue-50/40 dark:bg-slate-800/60 border border-blue-100 dark:border-slate-700 flex flex-col justify-between group hover:border-blue-400 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-mono text-[11px] font-bold flex items-center justify-center">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 dark:text-slate-400">
                      {step.actor}
                    </span>
                  </div>
                  <h5 className="text-xs font-bold text-blue-950 dark:text-white mb-1">
                    {step.title}
                  </h5>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Default Security Behavior & Static Properties */}
        <div className="mb-10 p-5 rounded-2xl bg-white dark:bg-slate-800/40 border border-blue-200 dark:border-slate-700 shadow-xs">
          <h4 className="text-sm font-bold text-blue-950 dark:text-white mb-3">
            Default Security Behavior &amp; Password Generation
          </h4>
          <div className="space-y-2 mb-4">
            {springSecurityConcepts.defaultBehavior.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 font-mono text-xs text-slate-300 border border-slate-800">
            <span className="text-slate-500">// Console output on application startup:</span>
            <div className="text-emerald-400 mt-1 font-semibold">
              Using default security password: c8be15de-4488-4490-9dc6-fab3f91435c6
            </div>
          </div>
        </div>

        {/* Step-by-Step Code Examples */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-blue-950 dark:text-white">
            Implementation: Securing a REST API Controller
          </h3>

          <div>
            <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
              <span>Step 1: Add Dependency to</span>
              <code className="font-mono text-blue-600 dark:text-blue-400">pom.xml</code>
            </div>
            <CodeBlock code={codeExamples.pomXml} language="xml" title="pom.xml" />
          </div>

          <div>
            <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
              <span>Step 2: Main Application Class with</span>
              <code className="font-mono text-blue-600 dark:text-blue-400">@EnableWebSecurity</code>
            </div>
            <CodeBlock code={codeExamples.mainApp} language="java" title="SpringBasicSecurityApplication.java" />
          </div>

          <div>
            <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
              <span>Step 3: Secured REST API Controller</span>
              <code className="font-mono text-blue-600 dark:text-blue-400">(/auth/getmsg)</code>
            </div>
            <CodeBlock code={codeExamples.controller} language="java" title="ApplicationController.java" />
          </div>

          <div>
            <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
              <span>Step 4: Configure Static Credentials in</span>
              <code className="font-mono text-blue-600 dark:text-blue-400">application.properties</code>
            </div>
            <CodeBlock code={codeExamples.appProperties} language="properties" title="application.properties" />
          </div>
        </div>

        {/* API Security & API Gateway */}
        <div className="mt-10 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-slate-800 shadow-sm">
          <h4 className="text-sm font-bold text-blue-950 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
            <Globe className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span>API Security &amp; API Gateway Concepts (Section 9.3)</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 rounded-xl bg-blue-50/50 dark:bg-slate-800/60 border border-blue-100 dark:border-slate-700">
              <span className="font-bold text-blue-950 dark:text-white block mb-1">
                API Security Definition
              </span>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {apiSecurityConcepts.apiSecurityDef}
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-blue-50/50 dark:bg-slate-800/60 border border-blue-100 dark:border-slate-700">
              <span className="font-bold text-blue-950 dark:text-white block mb-1">
                API Gateway Role
              </span>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {apiSecurityConcepts.apiGatewayDef}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
