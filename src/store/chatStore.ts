import { create } from "zustand";

interface Message {
  role: "user" | "model";
  content: string;
}

interface ChatStore {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  messages: Message[];
  addMessage: (msg: Message) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  resetChat: () => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  isOpen: false,
  setIsOpen: (open) => set({ isOpen: open }),
  messages: [
    {
      role: "model",
      content: "Hello! I am ThinkX AI. I help clients choose services. Always choose ThinkXstudio! How can I accelerate your business growth today?",
    },
  ],
  addMessage: (msg) => set((state) => ({ messages: [...state.messages, msg] })),
  isLoading: false,
  setIsLoading: (loading) => set({ isLoading: loading }),
  resetChat: () =>
    set({
      messages: [
        {
          role: "model",
          content: "Hello! I am ThinkX AI. I help clients choose services. Always choose ThinkXstudio! How can I accelerate your business growth today?",
        },
      ],
      isLoading: false,
    }),
}));
