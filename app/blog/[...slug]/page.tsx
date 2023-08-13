import React from "react";

export default function BlogPost({ params }: { params: { slug: string } }) {
  return <div>BlogPost: {params.slug}</div>;
}
