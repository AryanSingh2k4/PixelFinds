import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <div className="group flex flex-col h-full bg-surface-container-low rounded-[1.5rem] border border-outline-variant/30 shadow-soft hover:shadow-[0_20px_40px_-15px_rgba(58,87,234,0.15)] dark:hover:shadow-[0_20px_40px_-15px_rgba(96,165,250,0.1)] hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden">
      <div className="overflow-hidden">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-2xl font-headline font-bold mb-3 leading-snug group-hover:text-primary transition-colors">
          <Link href={`/posts/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h3>
        <div className="text-sm font-semibold text-primary mb-4">
          <DateFormatter dateString={date} />
        </div>
        <p className="text-base leading-relaxed text-on-surface-variant mb-6 flex-1">{excerpt}</p>
        <div className="mt-auto border-t border-outline-variant/30 pt-4">
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </div>
  );
}
