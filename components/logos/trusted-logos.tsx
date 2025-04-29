export function LineiconsLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="text-purple-500">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" />
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
      <span className="font-bold">Lineicons</span>
    </div>
  )
}

export function FormBoldLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="text-blue-500">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" />
          <path d="M7 8H17M7 12H17M7 16H13" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <span className="font-bold">FormBold</span>
    </div>
  )
}

export function UldeckLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="text-purple-600">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            fill="currentColor"
          />
          <path d="M8 12L11 15L16 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <span className="font-bold">Uldeck</span>
    </div>
  )
}
