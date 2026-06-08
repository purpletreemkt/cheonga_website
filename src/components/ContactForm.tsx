"use client";

import { useState } from "react";

type FormState = {
  company: string;
  manager: string;
  phone: string;
  email: string;
  message: string;
};

const INITIAL: FormState = {
  company: "",
  manager: "",
  phone: "",
  email: "",
  message: "",
};

const inputClass =
  "w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition-colors focus:border-brand-blue";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const update =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.company.trim()) e.company = "회사명을 입력해 주세요.";
    if (!form.manager.trim()) e.manager = "담당자 성함을 입력해 주세요.";
    if (!form.phone.trim()) e.phone = "연락처를 입력해 주세요.";
    if (!form.email.trim()) e.email = "이메일을 입력해 주세요.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "올바른 이메일 형식이 아닙니다.";
    if (!agree) e.agree = "개인정보 제공방침에 동의해 주세요.";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) {
      setSubmitted(false);
      return;
    }
    // TODO: 실제 이메일 발송 연동 (다음 단계)
    setSubmitted(true);
    setForm(INITIAL);
    setAgree(false);
  };

  return (
    <div className="mx-auto mt-12 max-w-4xl">
      {/* 제출 완료 임시 알림 */}
      {submitted && (
        <p className="mb-6 rounded-md bg-brand-blue/10 px-4 py-3 text-brand-blue">
          문의가 접수되었습니다.
        </p>
      )}

      {/* 첫 줄: 회사명 / 담당자 성함 / 연락처 */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Field
          id="company"
          label="회사명"
          required
          value={form.company}
          onChange={update("company")}
          error={errors.company}
        />
        <Field
          id="manager"
          label="담당자 성함"
          required
          value={form.manager}
          onChange={update("manager")}
          error={errors.manager}
        />
        <Field
          id="phone"
          label="연락처"
          required
          value={form.phone}
          onChange={update("phone")}
          error={errors.phone}
        />
      </div>

      {/* 둘째 줄: 이메일 */}
      <div className="mt-6">
        <Field
          id="email"
          label="이메일"
          type="email"
          required
          value={form.email}
          onChange={update("email")}
          error={errors.email}
        />
      </div>

      {/* 셋째 줄: 문의사항 */}
      <div className="mt-6">
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          문의사항
        </label>
        <textarea
          id="message"
          rows={6}
          value={form.message}
          onChange={update("message")}
          className={`${inputClass} resize-y`}
        />
      </div>

      {/* 맨 아래: 동의 체크박스 + 문의하기 버튼 */}
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="h-4 w-4"
            />
            <span>개인정보 제공방침에 동의합니다.</span>
          </label>
          {errors.agree && (
            <p className="mt-1 text-sm text-red-500">{errors.agree}</p>
          )}
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="bg-brand-blue rounded-full px-8 py-3 font-semibold text-white transition-colors hover:bg-navy"
        >
          문의하기
        </button>
      </div>
    </div>
  );
}

type FieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  type?: string;
  error?: string;
};

function Field({
  id,
  label,
  value,
  onChange,
  required = false,
  type = "text",
  error,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className={inputClass}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
