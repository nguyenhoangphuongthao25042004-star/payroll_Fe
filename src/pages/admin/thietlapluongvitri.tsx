import {
  CheckCircleOutlined,
  CloseOutlined,
  DollarOutlined,
  EditOutlined,
  PlusOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";

import {
  Badge,
  Button,
  Card,
  Col,
  ConfigProvider,
  Form,
  Input,
  InputNumber,
  Modal,
  Row,
  Select,
  Space,
  Statistic,
  Switch,
  Table,
  Tag,
  Typography,
  message,
} from "antd";

import { useState } from "react";

import { useTheme } from "../../context/themecontext";

const { Title, Text } = Typography;

const data = [
  {
    id: 1,

    viTri: "Frontend Developer",

    bacLuong: "P1-03",

    phongBan: "CNTT",

    luong: 18000000,

    nhanVien: 6,

    trangThai: true,
  },

  {
    id: 2,

    viTri: "Backend Developer",

    bacLuong: "P1-04",

    phongBan: "CNTT",

    luong: 22000000,

    nhanVien: 4,

    trangThai: true,
  },

  {
    id: 3,

    viTri: "HR Manager",

    bacLuong: "P1-05",

    phongBan: "Nhân sự",

    luong: 25000000,

    nhanVien: 2,

    trangThai: false,
  },
];

const formatCurrency = (
  value: number
) => {
  return new Intl.NumberFormat(
    "vi-VN",
    {
      style: "currency",

      currency: "VND",

      maximumFractionDigits: 0,
    }
  ).format(value);
};

const CauHinhLuongP1 = () => {
  const { isDark } = useTheme();

  const [search, setSearch] =
    useState("");

  const [openModal, setOpenModal] =
    useState(false);

  const [editingData, setEditingData] =
    useState<any>(null);

  const [form] = Form.useForm();

  // THEME

  const bgColor = isDark
    ? "#020617"
    : "#f8fafc";

  const cardColor = isDark
    ? "#0f172a"
    : "#ffffff";

  const textColor = isDark
    ? "#f8fafc"
    : "#0f172a";

  const subText = isDark
    ? "#94a3b8"
    : "#64748b";

  const borderColor = isDark
    ? "rgba(148,163,184,0.12)"
    : "#e2e8f0";

  const filteredData =
    data.filter((item) =>
      item.viTri
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  const columns = [
    {
      title: "Vị trí",

      dataIndex: "viTri",

      render: (
        value: string,
        record: any
      ) => (
        <Space size={14}>
          <div
            style={{
              width: 48,

              height: 48,

              borderRadius: 16,

              background:
                "rgba(37,99,235,0.12)",

              display: "flex",

              alignItems: "center",

              justifyContent:
                "center",

              color: "#2563eb",

              fontSize: 20,
            }}
          >
            <UserOutlined />
          </div>

          <Space
            direction="vertical"
            size={0}
          >
            <Text
              style={{
                color:
                  textColor,

                fontWeight: 700,

                fontSize: 15,
              }}
            >
              {value}
            </Text>

            <Text
              style={{
                color:
                  subText,

                fontSize: 13,
              }}
            >
              {
                record.bacLuong
              }
            </Text>
          </Space>
        </Space>
      ),
    },

    {
      title: "Phòng ban",

      dataIndex: "phongBan",

      render: (
        value: string
      ) => (
        <Tag
          color="blue"
          style={{
            borderRadius: 999,

            padding:
              "4px 14px",

            fontWeight: 600,
          }}
        >
          {value}
        </Tag>
      ),
    },

    {
      title: "Lương P1",

      dataIndex: "luong",

      render: (
        value: number
      ) => (
        <Text
          style={{
            color:
              "#10b981",

            fontWeight: 700,
          }}
        >
          {formatCurrency(
            value
          )}
        </Text>
      ),
    },

    {
      title: "Nhân viên",

      dataIndex: "nhanVien",

      render: (
        value: number
      ) => (
        <Badge
          color="#2563eb"
          text={
            <Text
              style={{
                color:
                  textColor,
              }}
            >
              {value} nhân viên
            </Text>
          }
        />
      ),
    },

    {
      title: "Trạng thái",

      dataIndex: "trangThai",

      render: (
        value: boolean
      ) => (
        <Tag
          color={
            value
              ? "green"
              : "red"
          }
          style={{
            borderRadius: 999,

            padding:
              "4px 14px",

            fontWeight: 600,
          }}
        >
          {value
            ? "Đang áp dụng"
            : "Tạm khóa"}
        </Tag>
      ),
    },

    {
      title: "",

      render: (
        _: any,
        record: any
      ) => (
        <Button
          type="text"
          icon={<EditOutlined />}
          onClick={() => {
            setEditingData(
              record
            );

            form.setFieldsValue(
              record
            );

            setOpenModal(
              true
            );
          }}
        />
      ),
    },
  ];

  return (
    <ConfigProvider>
      <div
        style={{
          minHeight:
            "100vh",

          background:
            bgColor,

          padding: 28,
        }}
      >
        {/* HEADER */}

        <Card
          style={{
            borderRadius: 28,

            marginBottom: 24,

            background:
              cardColor,

            border: `1px solid ${borderColor}`,

            boxShadow: isDark
              ? "0 10px 30px rgba(0,0,0,0.22)"
              : "0 10px 30px rgba(15,23,42,0.05)",
          }}
          bodyStyle={{
            padding:
              "30px 34px",
          }}
        >
          <Row
            justify="space-between"
            align="middle"
            gutter={[20, 20]}
          >
            <Col>
              <Space size={18}>
                <div
                  style={{
                    width: 72,

                    height: 72,

                    borderRadius: 22,

                    background:
                      isDark
                        ? "#111827"
                        : "#eff6ff",

                    display: "flex",

                    alignItems:
                      "center",

                    justifyContent:
                      "center",

                    color: "#2563eb",

                    fontSize: 30,
                  }}
                >
                  <DollarOutlined />
                </div>

                <Space
                  direction="vertical"
                  size={0}
                >
                  <Title
                    level={2}
                    style={{
                      margin: 0,

                      color:
                        textColor,
                    }}
                  >
                    Cấu hình lương vị trí P1
                  </Title>

                  <Text
                    style={{
                      color:
                        subText,

                      fontSize: 15,
                    }}
                  >
                    Thiết lập lương theo
                    vị trí công việc hệ
                    thống
                  </Text>
                </Space>
              </Space>
            </Col>

            <Col>
              <Button
                type="primary"
                size="large"
                icon={<PlusOutlined />}
                style={{
                  height: 50,

                  borderRadius: 16,

                  paddingInline: 24,

                  fontWeight: 700,
                }}
                onClick={() => {
                  setEditingData(
                    null
                  );

                  form.resetFields();

                  setOpenModal(
                    true
                  );
                }}
              >
                Thêm cấu hình
              </Button>
            </Col>
          </Row>
        </Card>

        {/* STATS */}

        <Row
          gutter={[20, 20]}
          style={{
            marginBottom: 24,
          }}
        >
          <Col
            xs={24}
            md={8}
          >
            <Card
              style={{
                borderRadius: 24,

                background:
                  cardColor,

                border: `1px solid ${borderColor}`,
              }}
            >
              <Statistic
                title="Tổng vị trí"
                value={data.length}
              />
            </Card>
          </Col>

          <Col
            xs={24}
            md={8}
          >
            <Card
              style={{
                borderRadius: 24,

                background:
                  cardColor,

                border: `1px solid ${borderColor}`,
              }}
            >
              <Statistic
                title="Mức lương cao nhất"
                value={25000000}
                formatter={(
                  value
                ) =>
                  formatCurrency(
                    Number(value)
                  )
                }
              />
            </Card>
          </Col>

          <Col
            xs={24}
            md={8}
          >
            <Card
              style={{
                borderRadius: 24,

                background:
                  cardColor,

                border: `1px solid ${borderColor}`,
              }}
            >
              <Statistic
                title="Đang áp dụng"
                value={
                  data.filter(
                    (
                      item
                    ) =>
                      item.trangThai
                  ).length
                }
              />
            </Card>
          </Col>
        </Row>

        {/* TABLE */}

        <Card
          style={{
            borderRadius: 28,

            background:
              cardColor,

            border: `1px solid ${borderColor}`,
          }}
          bodyStyle={{
            padding: 24,
          }}
        >
          <Space
            direction="vertical"
            size={22}
            style={{
              width: "100%",
            }}
          >
            {/* TOOLBAR */}

            <Row
              justify="space-between"
              align="middle"
              gutter={[16, 16]}
            >
              <Col>
                <Space size={14}>
                  <Input
                    prefix={
                      <SearchOutlined />
                    }
                    placeholder="Tìm vị trí..."
                    value={search}
                    onChange={(e) =>
                      setSearch(
                        e.target
                          .value
                      )
                    }
                    style={{
                      width: 320,

                      height: 46,

                      borderRadius: 14,
                    }}
                  />

                  <Select
                    placeholder="Phòng ban"
                    style={{
                      width: 180,

                      height: 46,
                    }}
                    options={[
                      {
                        label:
                          "CNTT",

                        value: 1,
                      },

                      {
                        label:
                          "Nhân sự",

                        value: 2,
                      },
                    ]}
                  />
                </Space>
              </Col>

              <Col>
                <Tag
                  color="blue"
                  style={{
                    borderRadius: 999,

                    padding:
                      "6px 16px",

                    fontWeight: 600,
                  }}
                >
                  Tổng:{" "}
                  {
                    filteredData.length
                  }{" "}
                  vị trí
                </Tag>
              </Col>
            </Row>

            {/* TABLE */}

            <Table
              columns={columns}
              dataSource={
                filteredData
              }
              pagination={{
                pageSize: 6,
              }}
              rowKey="id"
            />
          </Space>
        </Card>

        {/* MODAL */}

        <Modal
          closeIcon={false}
          open={openModal}
          onCancel={() => {
            setOpenModal(false);

            form.resetFields();
          }}
          footer={null}
          centered
          width={920}
          destroyOnClose
          maskClosable={false}
          zIndex={2000}
          style={{
            top: 16,
          }}
          styles={{
            mask: {
              backdropFilter:
                "blur(14px)",

              background:
                isDark
                  ? "rgba(2,6,23,0.76)"
                  : "rgba(15,23,42,0.42)",
            },

            root: {
              padding: 0,

              overflow:
                "hidden",

              borderRadius: 28,

              background:
                "transparent",

              boxShadow:
                "0 30px 80px rgba(0,0,0,0.22)",
            },

            body: {
              padding: 0,

              overflow:
                "hidden",

              borderRadius: 28,

              background:
                "transparent",
            },
          }}
        >
          <div
            style={{
              borderRadius: 28,

              overflow: "hidden",

              background:
                isDark
                  ? "#0f172a"
                  : "#ffffff",
            }}
          >
            {/* HEADER */}

            <div
              style={{
                position:
                  "relative",

                background:
                  "linear-gradient(135deg,#2563eb,#4f46e5)",

                padding:
                  "28px 32px",

                overflow:
                  "hidden",
              }}
            >
              <div
                style={{
                  position:
                    "absolute",

                  top: -120,

                  right: -100,

                  width: 240,

                  height: 240,

                  borderRadius:
                    "50%",

                  background:
                    "rgba(255,255,255,0.08)",
                }}
              />

              <Button
                type="text"
                icon={
                  <CloseOutlined />
                }
                onClick={() => {
                  setOpenModal(
                    false
                  );

                  form.resetFields();
                }}
                style={{
                  position:
                    "absolute",

                  top: 18,

                  right: 18,

                  width: 48,

                  height: 48,

                  borderRadius: 18,

                  background:
                    "rgba(255,255,255,0.12)",

                  border:
                    "2px solid rgba(147,197,253,0.65)",

                  color: "#fff",

                  fontSize: 16,

                  zIndex: 3,
                }}
              />

              <Space
                direction="vertical"
                size={2}
                style={{
                  position:
                    "relative",

                  zIndex: 2,
                }}
              >
                <Title
                  level={2}
                  style={{
                    margin: 0,

                    color:
                      "#fff",

                    fontSize: 30,

                    fontWeight: 700,
                  }}
                >
                  {editingData
                    ? "Cập nhật lương P1"
                    : "Thêm lương P1"}
                </Title>

                <Text
                  style={{
                    color:
                      "rgba(255,255,255,0.82)",

                    fontSize: 14,
                  }}
                >
                  Thiết lập cấu hình
                  lương vị trí hệ
                  thống
                </Text>
              </Space>
            </div>

            {/* BODY */}

            <div
              style={{
                padding: 28,

                maxHeight:
                  "75vh",

                overflowY:
                  "auto",
              }}
            >
              <Form
                layout="vertical"
                form={form}
              >
                {/* INFO */}

                <Card
                  style={{
                    borderRadius: 24,

                    background:
                      isDark
                        ? "#111827"
                        : "#f8fafc",

                    border: `1px solid ${borderColor}`,
                  }}
                  bodyStyle={{
                    padding: 24,
                  }}
                >
                  <Space
                    direction="vertical"
                    size={22}
                    style={{
                      width: "100%",
                    }}
                  >
                    <div>
                      <Title
                        level={4}
                        style={{
                          marginBottom: 4,

                          color:
                            textColor,

                          fontSize: 20,
                        }}
                      >
                        Thông tin lương P1
                      </Title>

                      <Text
                        style={{
                          color:
                            subText,

                          fontSize: 14,
                        }}
                      >
                        Thiết lập dữ
                        liệu lương vị
                        trí
                      </Text>
                    </div>

                    <Row
                      gutter={[20, 20]}
                    >
                      <Col
                        xs={24}
                        md={12}
                      >
                        <Form.Item label="Tên vị trí">
                          <Input
                            size="large"
                            placeholder="Nhập tên vị trí"
                            style={{
                              height: 50,

                              borderRadius: 16,
                            }}
                          />
                        </Form.Item>
                      </Col>

                      <Col
                        xs={24}
                        md={12}
                      >
                        <Form.Item label="Bậc lương P1">
                          <Input
                            size="large"
                            placeholder="Ví dụ: P1-03"
                            style={{
                              height: 50,

                              borderRadius: 16,
                            }}
                          />
                        </Form.Item>
                      </Col>

                      <Col
                        xs={24}
                        md={12}
                      >
                        <Form.Item label="Phòng ban">
                          <Select
                            size="large"
                            placeholder="Chọn phòng ban"
                            style={{
                              height: 50,
                            }}
                            options={[
                              {
                                label:
                                  "CNTT",

                                value: 1,
                              },

                              {
                                label:
                                  "Nhân sự",

                                value: 2,
                              },
                            ]}
                          />
                        </Form.Item>
                      </Col>

                      <Col
                        xs={24}
                        md={12}
                      >
                        <Form.Item label="Mức lương">
                          <InputNumber
                            size="large"
                            addonAfter="VNĐ"
                            style={{
                              width:
                                "100%",

                              height: 50,
                            }}
                          />
                        </Form.Item>
                      </Col>

                      <Col span={24}>
                        <Form.Item label="Mô tả">
                          <Input.TextArea
                            rows={4}
                            placeholder="Nhập mô tả..."
                            style={{
                              borderRadius: 16,
                            }}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Space>
                </Card>

                {/* SETTING */}

                <Card
                  style={{
                    marginTop: 22,

                    borderRadius: 24,

                    background:
                      isDark
                        ? "#111827"
                        : "#f8fafc",

                    border: `1px solid ${borderColor}`,
                  }}
                  bodyStyle={{
                    padding: 22,
                  }}
                >
                  <Space
                    direction="vertical"
                    size={16}
                    style={{
                      width: "100%",
                    }}
                  >
                    <div>
                      <Title
                        level={4}
                        style={{
                          marginBottom: 4,

                          color:
                            textColor,

                          fontSize: 20,
                        }}
                      >
                        Thiết lập hệ thống
                      </Title>

                      <Text
                        style={{
                          color:
                            subText,

                          fontSize: 14,
                        }}
                      >
                        Cấu hình trạng
                        thái áp dụng
                      </Text>
                    </div>

                    <div
                      style={{
                        display:
                          "flex",

                        justifyContent:
                          "space-between",

                        alignItems:
                          "center",

                        padding:
                          "16px 18px",

                        borderRadius: 16,

                        background:
                          isDark
                            ? "#0b1220"
                            : "#ffffff",

                        border: `1px solid ${borderColor}`,
                      }}
                    >
                      <Space
                        direction="vertical"
                        size={0}
                      >
                        <Text
                          style={{
                            color:
                              textColor,

                            fontWeight: 600,

                            fontSize: 14,
                          }}
                        >
                          Kích hoạt cấu hình
                        </Text>

                        <Text
                          style={{
                            color:
                              subText,

                            fontSize: 13,
                          }}
                        >
                          Áp dụng lương
                          P1 cho vị trí
                          này
                        </Text>
                      </Space>

                      <Switch defaultChecked />
                    </div>
                  </Space>
                </Card>

                {/* ACTION */}

                <Row
                  justify="end"
                  style={{
                    marginTop: 28,
                  }}
                >
                  <Space size={12}>
                    <Button
                      size="large"
                      onClick={() => {
                        setOpenModal(
                          false
                        );

                        form.resetFields();
                      }}
                      style={{
                        height: 48,

                        borderRadius: 14,

                        paddingInline: 24,
                      }}
                    >
                      Hủy
                    </Button>

                    <Button
                      type="primary"
                      size="large"
                      icon={
                        <CheckCircleOutlined />
                      }
                      style={{
                        height: 48,

                        borderRadius: 14,

                        paddingInline: 24,

                        fontWeight: 700,
                      }}
                      onClick={() => {
                        message.success(
                          editingData
                            ? "Cập nhật thành công"
                            : "Thêm thành công"
                        );

                        setOpenModal(
                          false
                        );
                      }}
                    >
                      {editingData
                        ? "Cập nhật"
                        : "Lưu dữ liệu"}
                    </Button>
                  </Space>
                </Row>
              </Form>
            </div>
          </div>
        </Modal>
      </div>
    </ConfigProvider>
  );
};

export default CauHinhLuongP1;