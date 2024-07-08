import { ProjectCard } from "@/components/projects/ProjectCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Content, slugToProject } from "@hycord/content";
import { Divide, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

function parseContent(c: Content): React.ReactNode {
  switch (c.type) {
    case "list":
      return (
        <div className="flex flex-col gap-2 pl-4">
          {c.content.map((b) => (
            <div className="flex flex-row gap-2">
              <p>{"\t"}</p>
              {b}
            </div>
          ))}
        </div>
      );

    case "subtitle":
      if (typeof c.content == "string") {
        return <h3 className="text-xl font-semibold">{c.content}</h3>;
      } else
        return (
          <h3 className="text-xl font-semibold flex flex-row gap-1.5">
            {c.content.map((d) =>
              typeof d == "string" ? <p>{d}</p> : parseContent(d)
            )}
          </h3>
        );

    case "title":
      if (typeof c.content == "string") {
        return (
          <>
            <h1 className="text-xl font-semibold underline decoration-dashed flex flex-row gap-1.5">
              {c.content}
            </h1>
            <Separator />
          </>
        );
      } else
        return (
          <>
            <h1 className="text-xl font-semibold underline decoration-dashed flex flex-row gap-1.5">
              {c.content.map((d) =>
                typeof d == "string" ? <p>{d}</p> : parseContent(d)
              )}
            </h1>
            <Separator />
          </>
        );
    case "url":
      return (
        <Link
          className="underline hover:no-underline text-primary hover:text-inherit transition-colors  duration-500"
          href={c.href}
          target="_blank"
        >
          {c.content}
        </Link>
      );

    case "gap":
      return <div className="m-2"></div>;

    case "separator":
      return <Separator />;

    case "table":
      return (
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          {c.headers && c.headers.length && (
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/75">
                {c.headers.slice(0, 2).map((h, i, a) => (
                  <TableHead colSpan={a.length == 1 ? 2 : 1}>{h}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
          )}
          <TableBody>
            {c.content.map(({ key, value }) =>
              value ? (
                <TableRow key={key}>
                  <TableCell>{key}</TableCell>
                  <TableCell className="font-light">{value}</TableCell>
                </TableRow>
              ) : (
                <TableRow className="bg-muted/50 hover:bg-muted/75">
                  <TableCell colSpan={2}>{key}</TableCell>
                </TableRow>
              )
            )}
            {/* {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell className="text-right">
                  {invoice.totalAmount}
                </TableCell>
              </TableRow>
            ))} */}
          </TableBody>
          {/* <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter> */}
        </Table>
      );

    default:
      if (typeof c.content == "string") {
        return <div>{c.content}</div>;
      } else
        return (
          <div className=" flex flex-row gap-1.5 ">
            {c.content.map((d) =>
              typeof d == "string" ? <p>{d}</p> : parseContent(d)
            )}
          </div>
        );
  }
}

function Page({
  params: { clientSlug, projectSlug },
}: {
  params: { projectSlug: string; clientSlug: string };
}) {
  const proj = slugToProject(clientSlug as any, projectSlug);

  if (!proj) return redirect(`/projects/${clientSlug}`);

  const {
    images,
    project,
    client: { client, images: clientImages },
  } = proj;

  return (
    <div className="flex flex-1 flex-col items-center justify-start overflow-scroll no-scrollbar px-4 pt-4">
      <Card className="border-none bg-inherit">
        <CardHeader>
          <CardTitle className="flex flex-row items-center justify-start gap-4">
            <Image
              src={clientImages.icon}
              alt={`${client.slug}'s Avatar`}
              width={512}
              height={512}
              className="rounded-full aspect-square h-16 w-16"
            />
            <Link
              href={`/projects/${client.slug}`}
              className="flex flex-row gap-2 items-center justify-start underline hover:no-underline text-primary hover:text-inherit transition-colors duration-500"
            >
              {client.displayName ? client.displayName : client.slug}{" "}
              <ExternalLink />
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent className=" max-w-prose gap-2 flex flex-col">
          {project.content.map((c) => parseContent(c))}
        </CardContent>
      </Card>
    </div>
  );
}

export default Page;
