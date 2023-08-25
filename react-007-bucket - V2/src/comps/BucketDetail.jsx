import { Form, useLoaderData, redirect } from "react-router-dom";
import dImage from "../assets/그림1.png";
import Button from "../shareCompus/Button";
import css from "./BucketDetail.module.scss";
import { deleteBucket, getBucket, saveBucket } from "../modules/bucketFech";

export const detailLoader = async ({ params }) => {
  // const id = params.id
  const { id } = params;
  const bucket = await getBucket(id);
  if (!bucket) {
    return redirect("/");
  }
  return { bucket };
};
export const completeAction = async ({ params }) => {
  const bucket = await getBucket(params.id);
  const completeBucket = { ...bucket, complete: !bucket.complete };
  await saveBucket(completeBucket);
  return redirect(`/content/${params.id}`);
};
export const deleteAction = async ({ params }) => {
  if (window.confirm("진짜 삭제할꺼야?")) {
    // 삭제
    await deleteBucket(params.id);
    return redirect("/");
  }
  return redirect(`/content/${params.id}`);
};

export const favoiteAction = async ({ params, request }) => {
  const formData = await request.formData();
  const resultBucket = await getBucket(params.id);
  // fromData() 에서 input 에 저장된 데이터만 추출하기
  // const newBucket = Object.fromEntries(formData);
  const favorite = formData.get("favorite") === "true";
  //favprite 값이 트루인지 펄스인지 확인하는 코드
  const updateBucket = { ...resultBucket, favorite: !favorite };
  await saveBucket(updateBucket);
};

const Favorite = ({ buket }) => {
  let favoite = buket.favoite;
  return (
    <Form method="POST">
      <button name="favoite" value={favoite ? "true" : "false"}>
        {favoite ? "★" : "☆"}
      </button>
    </Form>
  );
};

const BuketDetail = () => {
  const { bucket } = useLoaderData();
  return (
    <article className={css.buck_detail}>
      <div className={css.first}>
        <img
          src={bucket?.img_src || dImage}
          alt={bucket?.bucket}
          width="100px"
        />
      </div>
      <div className={css.last}>
        <h1>
          {bucket.bucket || "NONE"}
          <Favorite buket={bucket} />
        </h1>
        <div>
          <Form action="edit">
            <Button>수정</Button>
          </Form>
          <Form action="delete" method="POST">
            <Button
              className={css.delete}
              bgColor="red"
              // type={bucket.complete ? "button" : "submit"}
              disabled={bucket.complete ? "disabled" : ""}
            >
              삭제
            </Button>
          </Form>
          <Form action="complete" method="POST">
            <Button bgColor={bucket.complete ? "orange" : "green"}>
              {bucket.complete ? "완료취소 " : "완료"}
            </Button>
          </Form>
        </div>
      </div>
    </article>
  );
};
export default BuketDetail;
