create table "public"."cod_skills" (
    "id" bigint generated by default as identity not null,
    "name" text not null,
    "description" text not null,
    "type" text not null,
    "level" smallint not null default '1'::smallint,
    "slug" text not null,
    "extra_info" text,
    "uniqueness_id" text
);


alter table "public"."cod_skills" enable row level security;

CREATE UNIQUE INDEX cod_skills_pkey ON public.cod_skills USING btree (id);

CREATE UNIQUE INDEX cod_skills_slug_key ON public.cod_skills USING btree (slug);

alter table "public"."cod_skills" add constraint "cod_skills_pkey" PRIMARY KEY using index "cod_skills_pkey";

alter table "public"."cod_skills" add constraint "cod_skills_slug_key" UNIQUE using index "cod_skills_slug_key";

grant delete on table "public"."cod_skills" to "anon";

grant insert on table "public"."cod_skills" to "anon";

grant references on table "public"."cod_skills" to "anon";

grant select on table "public"."cod_skills" to "anon";

grant trigger on table "public"."cod_skills" to "anon";

grant truncate on table "public"."cod_skills" to "anon";

grant update on table "public"."cod_skills" to "anon";

grant delete on table "public"."cod_skills" to "authenticated";

grant insert on table "public"."cod_skills" to "authenticated";

grant references on table "public"."cod_skills" to "authenticated";

grant select on table "public"."cod_skills" to "authenticated";

grant trigger on table "public"."cod_skills" to "authenticated";

grant truncate on table "public"."cod_skills" to "authenticated";

grant update on table "public"."cod_skills" to "authenticated";

grant delete on table "public"."cod_skills" to "service_role";

grant insert on table "public"."cod_skills" to "service_role";

grant references on table "public"."cod_skills" to "service_role";

grant select on table "public"."cod_skills" to "service_role";

grant trigger on table "public"."cod_skills" to "service_role";

grant truncate on table "public"."cod_skills" to "service_role";

grant update on table "public"."cod_skills" to "service_role";


create policy "Enable users to view skills"
on "public"."cod_skills"
as permissive
for select
to authenticated
using (true);
