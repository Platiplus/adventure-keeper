create table "public"."cod_conditions" (
    "id" bigint generated by default as identity not null,
    "name" text not null,
    "description" text not null,
    "resolution" text not null,
    "persistent" boolean not null default false,
    "slug" text not null
);


alter table "public"."cod_conditions" enable row level security;

CREATE UNIQUE INDEX cod_conditions_pkey ON public.cod_conditions USING btree (id);

CREATE UNIQUE INDEX cod_conditions_slug_key ON public.cod_conditions USING btree (slug);

alter table "public"."cod_conditions" add constraint "cod_conditions_pkey" PRIMARY KEY using index "cod_conditions_pkey";

alter table "public"."cod_conditions" add constraint "cod_conditions_slug_key" UNIQUE using index "cod_conditions_slug_key";

grant delete on table "public"."cod_conditions" to "anon";

grant insert on table "public"."cod_conditions" to "anon";

grant references on table "public"."cod_conditions" to "anon";

grant select on table "public"."cod_conditions" to "anon";

grant trigger on table "public"."cod_conditions" to "anon";

grant truncate on table "public"."cod_conditions" to "anon";

grant update on table "public"."cod_conditions" to "anon";

grant delete on table "public"."cod_conditions" to "authenticated";

grant insert on table "public"."cod_conditions" to "authenticated";

grant references on table "public"."cod_conditions" to "authenticated";

grant select on table "public"."cod_conditions" to "authenticated";

grant trigger on table "public"."cod_conditions" to "authenticated";

grant truncate on table "public"."cod_conditions" to "authenticated";

grant update on table "public"."cod_conditions" to "authenticated";

grant delete on table "public"."cod_conditions" to "service_role";

grant insert on table "public"."cod_conditions" to "service_role";

grant references on table "public"."cod_conditions" to "service_role";

grant select on table "public"."cod_conditions" to "service_role";

grant trigger on table "public"."cod_conditions" to "service_role";

grant truncate on table "public"."cod_conditions" to "service_role";

grant update on table "public"."cod_conditions" to "service_role";

create policy "Enable users to view conditions"
on "public"."cod_conditions"
as permissive
for select
to authenticated
using (true);