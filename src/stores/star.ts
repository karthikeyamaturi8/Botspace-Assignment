import { create } from "zustand";

interface StarState {
    view: any,
    setView: (value?: any) => void;
    currentStep: any,
    nextStep: (value?: any) => void;
    comment: any,
    setComment: (value?: any) => void;
    selectedPost: any,
    setSelectedPost: (post: any) => void;
    posts: any[];
    viewEmojis: Boolean;
    onClickInput: () => void;
    openingDM: any;
    setOpeningDM: (value: any) => void;
    openingDMLink: any;
    setOpeningDMLink: (value: any) => void;
    message: any;
    setMessage: (value: any) => void;
}

// Zustand Store
export const useStarStore = create<StarState>((set, get) => ({
    view: "POST",
    setView: (value) => { set({ view: value }) },
    currentStep: 1,
    nextStep: (value) => {
        const { currentStep } = get();
        if (currentStep === 2) {
            set({ currentStep: value ? value : 4 })
        } else if (currentStep === 4) {
            set({ currentStep: value ? value : currentStep + 1, view: "DM" })
        } else {
            set({ currentStep: value ? value : currentStep + 1 })
        }

    },
    comment: "",
    setComment: (value) => {
        set({ comment: value, view: "COMMENTS" })
    },
    selectedPost: { id: 2, imageUrl: "/img-2.png", date: "06 May, 2025", likes: 18, comments: 0, description: "WhatsApp now connects 3 billion users, a milestone reflecting its influence in messaging. Thanks to Meta’s strides in AI and business tools, WhatsApp not only enhances personal communication but also empowers businesses with robust AI features. Looking to ride this wave? BotSpace, a Meta Business Partner, helps your business shine on WhatsApp with top-notch customer engagement, automation, and more. Handle everyday tasks effortlessly while increasing conversions and maintaining a 98% message open rate." },

    setSelectedPost: (post) => {
        set({
            selectedPost: post, currentStep: 1, view: "POST", message: "",
            openingDM: "Hey there! i'm so happy you're here, thanks so much for your interest 😊 \n\nClick below and I'll send you the link in just a sec ✨",
            openingDMLink: "Send me the link",
        });
    },
    posts: [
        { id: 1, imageUrl: "/img-1.png", date: "16 May, 2025", likes: 13, comments: 1, description: "If Iron Man trusts BotSpace, maybe your business should too. Suit up. 🤖🤖🤖<br>Join us now: https://bit.ly/4mpeqs6" },
        { id: 2, imageUrl: "/img-2.png", date: "06 May, 2025", likes: 18, comments: 0, description: "WhatsApp now connects 3 billion users, a milestone reflecting its influence in messaging. Thanks to Meta’s strides in AI and business tools, WhatsApp not only enhances personal communication but also empowers businesses with robust AI features. Looking to ride this wave? BotSpace, a Meta Business Partner, helps your business shine on WhatsApp with top-notch customer engagement, automation, and more. Handle everyday tasks effortlessly while increasing conversions and maintaining a 98% message open rate." },
        { id: 3, imageUrl: "/img-3.png", date: "03 May, 2025", likes: 71, comments: 22, description: "🎮 When your mom turns into your marketing manager 😩 <br>But she's right… BotSpace is kinda genius. 🧠<br>#BotSpace #MomKnowsBest #ContentCreatorLife" },
        { id: 4, imageUrl: "/img-4.png", date: "01 May, 2025", likes: 19, comments: 7, description: "Still posting and praying on Instagram?Here’s how AI can turn your page into a profit machine 🔥 <br>In this post, you’ll learn:<br>✅ How to use AI to automate DMs that sell<br>✅ How to create content that actually converts<br>✅ How to get discovered by buyers — not just followers<br>You don’t need a team. You just need the right tools.Save this. Use it. And watch your sales grow. 📈<br>👇 Drop “DM” if you’re ready to let AI do the heavy lifting for you." },
    ],
    viewEmojis: false,
    onClickInput: () => set({ viewEmojis: true }),
    openingDM: "Hey there! i'm so happy you're here, thanks so much for your interest 😊 \n\nClick below and I'll send you the link in just a sec ✨",
    setOpeningDM: (value: any) => set({ openingDM: value }),
    openingDMLink: "Send me the link",
    setOpeningDMLink: (value: any) => set({ openingDMLink: value }),
    message: "",
    setMessage: (value: any) => set({ message: value }),
    reset: () => {
        set({ view: "POST", currentStep: 1 })
    }

}));
