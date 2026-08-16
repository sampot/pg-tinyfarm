/** Optional Playgrounds stub. */
export default {
  async fetch(request) {
    return Response.json({ ok: true, name: "pg-tinyfarm", path: new URL(request.url).pathname });
  },
};
