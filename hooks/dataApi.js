export const usePostData = () => {
  return useMutation(({ path, formData }) =>
    request({
      method: "POST",
      url: path,
      data: formData,
    })
  );
};

export const usePutData = () => {
  return useMutation(({ path, formData }) =>
    request({
      method: "PUT",
      url: path,
      data: formData,
    })
  );
};

export const useGetData = (key, path) => {
  const { status, data, error, isLoading, isError, refetch } = useQuery(
    [
      key,
      {
        path: path,
        headers: {
          Authorization: "Bearer " + value.user,
        },
      },
    ],
    ({ queryKey, signal }) => {
      const { path, headers } = queryKey[1];
      return request({
        method: "GET",
        url: path,
        headers: headers,
        signal,
      });
    }
  );
  return { status, data, error, isLoading, isError, refetch };
};

export const useDeleteData = () => {
  return useMutation(({ path }) =>
    request({
      method: "DELETE",
      url: path,
    })
  );
};
