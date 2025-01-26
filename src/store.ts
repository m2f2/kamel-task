import { atom } from 'jotai';

export interface Message {
  isRead: boolean; 
  id: string;
  sender: string;
  time: string;
  date: string;
  message: string;
  isCurrentUser: boolean;
  avatarSrc: string;
}

const initialMessages: Message[] = [
    {
      id: '1',
      sender: "بندر احمد",
      time: '10:30',
      date: '2024-03-15',
      message: 'السلام عليكم، هل يوجد تحديثات على الطلب؟',
      isCurrentUser: false,
      isRead: false, 
      avatarSrc: 'avatars/ahmed.jpeg',
    },
    {
      id: '2',
      sender: 'نور علي',
      time: '11:15',
      date: '2024-03-15',
      message: 'نعم، تم شحن الطلب اليوم',
      isCurrentUser: true,
      isRead: true, 
      avatarSrc: '/avatars/nour.png',
    },
    {
      id: '3',
      sender:"بندر احمد",
      time: '11:20',
      date: '2024-03-15',
      message: 'شكراً على التوضيح، هل يوجد رقم تتبع للشحنة؟',
      isCurrentUser: false,
      isRead: false, 
      avatarSrc: '/avatars/ahmed.jpeg',
    },
    {
      id: '4',
      sender: 'نور علي',
      time: '11:35',
      date: '2024-03-15',
      message: 'نعم، رقم التتبع هو 123456789',
      isCurrentUser: true,
      isRead: true, 
      avatarSrc: '/avatars/nour.png',
    },
    {
      id: '5',
      sender: "بندر احمد",
      time: '12:00',
      date: '2024-03-15',
      message: 'تمام، شكراً جزيلاً!',
      isCurrentUser: false,
      isRead: false, 
      avatarSrc: '/avatars/ahmed.jpeg',
    },
    {
      id: '6',
      sender: 'نور علي',
      time: '12:05',
      date: '2024-03-15',
      message: 'على الرحب والسعة، في خدمتك دائماً.',
      isCurrentUser: true,
      isRead: true, 
      avatarSrc: '/avatars/nour.png',
    },
    {
      id: '7',
      sender: "بندر احمد",
      time: '14:15',
      date: '2024-03-15',
      message: 'هل من المتوقع أن تصل غداً؟',
      isCurrentUser: false,
      isRead: false, 
      avatarSrc: '/avatars/ahmed.jpeg',
    },
    {
      id: '8',
      sender: 'نور علي',
      time: '14:30',
      date: '2024-03-15',
      message: 'نعم، من المتوقع أن تصل غداً في وقت الظهيرة.',
      isCurrentUser: true,
      isRead: true, 
      avatarSrc: '/avatars/nour.png',
    },
  ];


const initialActiveOrders: number[] = [3, 6, 8, 12, 15];

export const messagesAtom = atom<Message[]>(initialMessages);
export const activeOrdersAtom = atom<number[]>(initialActiveOrders);
export const newMessageAtom = atom<string>('');
export const fullscreenAtom = atom(false);

