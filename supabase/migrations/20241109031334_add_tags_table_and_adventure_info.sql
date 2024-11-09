create table "public"."tags" (
    "id" bigint generated by default as identity not null,
    "name" text not null,
    "description" text not null,
    "slug" text not null
);


alter table "public"."tags" enable row level security;

alter table "public"."adventures_wod" add column "long_description" text;

alter table "public"."adventures_wod" add column "max_players" smallint not null default '4'::smallint;

alter table "public"."adventures_wod" add column "session_duration" smallint not null default '2'::smallint;

alter table "public"."adventures_wod" add column "tags" text[];

CREATE UNIQUE INDEX tags_pkey ON public.tags USING btree (id);

CREATE UNIQUE INDEX tags_slug_key ON public.tags USING btree (slug);

alter table "public"."tags" add constraint "tags_pkey" PRIMARY KEY using index "tags_pkey";

alter table "public"."tags" add constraint "tags_slug_key" UNIQUE using index "tags_slug_key";

grant delete on table "public"."tags" to "anon";

grant insert on table "public"."tags" to "anon";

grant references on table "public"."tags" to "anon";

grant select on table "public"."tags" to "anon";

grant trigger on table "public"."tags" to "anon";

grant truncate on table "public"."tags" to "anon";

grant update on table "public"."tags" to "anon";

grant delete on table "public"."tags" to "authenticated";

grant insert on table "public"."tags" to "authenticated";

grant references on table "public"."tags" to "authenticated";

grant select on table "public"."tags" to "authenticated";

grant trigger on table "public"."tags" to "authenticated";

grant truncate on table "public"."tags" to "authenticated";

grant update on table "public"."tags" to "authenticated";

grant delete on table "public"."tags" to "service_role";

grant insert on table "public"."tags" to "service_role";

grant references on table "public"."tags" to "service_role";

grant select on table "public"."tags" to "service_role";

grant trigger on table "public"."tags" to "service_role";

grant truncate on table "public"."tags" to "service_role";

grant update on table "public"."tags" to "service_role";
