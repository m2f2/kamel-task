import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Message } from '@/store';
import { format, parseISO } from 'date-fns';

interface ChatMessageProps extends Message {
  className?: string;
}

export const ChatMessage = ({
  sender,
  time,
  date,
  message,
  isCurrentUser,
  avatarSrc,
  className,
}: ChatMessageProps) => {
  const parsedDateTime = parseISO(`${date}T${time}`);
  const formattedTime = format(parsedDateTime, 'HH:mm');
  const formattedDate = format(parsedDateTime, 'MMM dd, yyyy');

  return (
    <article
      className={cn(
        'group flex my-2 w-full',
        isCurrentUser ? 'justify-end' : 'justify-start',
        className
      )}
      aria-labelledby={`message-${sender}-${date}-${time}`}
    >
      <div
        className={cn(
          'flex w-full max-w-lg lg:max-w-2xl gap-3 animate-fade-in rounded-xl p-3',
          'transition-colors duration-200 ease-out',
          isCurrentUser
            ? 'bg-emerald-100 hover:bg-emerald-200'
            : 'bg-white hover:bg-gray-50',
          !isCurrentUser && 'shadow-sm'
        )}
      >
        {/* Avatar Section */}
        {!isCurrentUser && (
          <Avatar className="h-10 w-10 shrink-0 transition-transform hover:scale-105">
            <AvatarImage
              src={avatarSrc}
              alt={`${sender}'s profile picture`}
              className="object-cover"
            />
            <AvatarFallback>
              {sender.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        )}

        {/* Message Content */}
        <div className="flex-1 min-w-0 space-y-2">
          {/* Header - Sender Info */}
          <header 
            className={`flex items-baseline  gap-2 ${isCurrentUser?"flex-row-reverse":""}`}
            id={`message-${sender}-${date}-${time}`}
          >
            <div className="flex items-center gap-2 truncate">
            {isCurrentUser && (
                <Badge
                  className="bg-green-500 rounded-xl text-white hover:bg-emerald-700"
                  aria-label="Your message"
                >
                  انت
                </Badge>
              )}
              <span className="truncate font-semibold text-gray-800">
                {sender}
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <time
                className="text-sm text-gray-500"
                dateTime={parsedDateTime.toISOString()}
              >
                {formattedTime}
              </time>
              <span
                className="text-xs text-gray-400"
                aria-label="Message date"
              >
                {formattedDate}
              </span>
            </div>
          </header>

          {/* Message Body */}
          <div
            className={cn(
              'rounded-lg p-3 prose prose-sm',
              'transition-colors duration-200',
            )}
          >
            {message.split('\n').map((line, index) => (
              <p
                key={`${sender}-${date}-${time}-line-${index}`}
                className="text-gray-700 leading-relaxed break-words"
              >
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* Current User Avatar */}
        {isCurrentUser && (
          <Avatar className="h-10 w-10 shrink-0 transition-transform hover:scale-105">
            <AvatarImage
              src={avatarSrc}
              alt={`Your profile picture`}
              className="object-cover"
            />
            <AvatarFallback>
              {sender.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        )}
      </div>
    </article>
  );
};