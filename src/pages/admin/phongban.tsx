import {
  Row,
  Col,
  Card,
  Typography,
  Space,
  Button,
  Input,
  Table,
  Avatar,
  Tag,
  Modal,
  Form,
  Select,
  Switch,
  Tooltip,
  ConfigProvider,
  DatePicker,
} from "antd";

import {
  PlusOutlined,
  SearchOutlined,
  EditOutlined,
  DeleteOutlined,
  BankOutlined,
  UserOutlined,
  MoreOutlined,
} from "@ant-design/icons";

import { useState } from "react";

import { useTheme } from "../../context/themecontext";
import { CloseOutlined } from "@mui/icons-material";

const { Title, Text } = Typography;


const QuanLyPhongBan = () => {
  const { isDark } = useTheme();

  // ================= STATE =================

  const [openModal, setOpenModal] =
    useState(false);

  const [search, setSearch] =
    useState("");

  const [editingDepartment, setEditingDepartment] =
    useState<any>(null);

  const [form] = Form.useForm();

  // ================= THEME =================

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

  const glassCard = {
    background: cardColor,

    border: `1px solid ${borderColor}`,

    borderRadius: 24,

    overflow: "hidden",

    boxShadow: isDark
      ? "0 10px 30px rgba(0,0,0,0.24)"
      : "0 10px 30px rgba(15,23,42,0.06)",
  };

  // ================= DATA =================

  const departmentData = [
    {
      key: 1,

      maPhongBan: "PB001",

      tenPhongBan:
        "Công nghệ thông tin",

      truongPhong:
        "Nguyễn Văn A",

      nhanSu: 42,

      ngayTao: "12/02/2026",

      trangThai: "Hoạt động",
    },

    {
      key: 2,

      maPhongBan: "PB002",

      tenPhongBan:
        "Nhân sự",

      truongPhong:
        "Trần Thị B",

      nhanSu: 18,

      ngayTao: "08/01/2026",

      trangThai: "Hoạt động",
    },

    {
      key: 3,

      maPhongBan: "PB003",

      tenPhongBan:
        "Marketing",

      truongPhong:
        "Lê Văn C",

      nhanSu: 26,

      ngayTao: "22/03/2026",

      trangThai: "Tạm khóa",
    },
  ];

  // ================= FILTER =================

  const filteredData =
    departmentData.filter((item) =>
      item.tenPhongBan
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  // ================= TABLE =================

  const columns = [
    {
      title: "Phòng ban",

      dataIndex: "tenPhongBan",

      render: (
        value: string,
        record: any
      ) => (
        <Space size={14}>
          <Avatar
            size={46}
            style={{
              background:
                "rgba(59,130,246,0.12)",

              color: "#3b82f6",

              fontSize: 20,
            }}
            icon={<BankOutlined />}
          />

          <Space
            direction="vertical"
            size={0}
          >
            <Text
              style={{
                color: textColor,

                fontWeight: 700,

                fontSize: 15,
              }}
            >
              {value}
            </Text>

            <Text
              style={{
                color: subText,

                fontSize: 13,
              }}
            >
              {record.maPhongBan}
            </Text>
          </Space>
        </Space>
      ),
    },

    {
      title: "Trưởng phòng",

      dataIndex: "truongPhong",

      render: (value: string) => (
        <Space size={12}>
          <Avatar
            icon={<UserOutlined />}
          />

          <Text
            style={{
              color: textColor,

              fontWeight: 500,
            }}
          >
            {value}
          </Text>
        </Space>
      ),
    },

    {
      title: "Nhân sự",

      dataIndex: "nhanSu",

      render: (value: number) => (
        <Tag
          color="blue"
          style={{
            borderRadius: 999,

            padding:
              "4px 14px",

            fontWeight: 600,
          }}
        >
          {value} nhân viên
        </Tag>
      ),
    },

    {
      title: "Ngày tạo",

      dataIndex: "ngayTao",

      render: (value: string) => (
        <Text
          style={{
            color: subText,
          }}
        >
          {value}
        </Text>
      ),
    },

    {
      title: "Trạng thái",

      dataIndex: "trangThai",

      render: (value: string) => (
        <Tag
          color={
            value === "Hoạt động"
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
          {value}
        </Tag>
      ),
    },

    {
      title: "",

      render: (
        _: any,
        record: any
      ) => (
        <Space size={4}>
          {/* EDIT */}

          <Tooltip title="Cập nhật">
            <Button
              type="text"
              icon={<EditOutlined />}
              style={{
                color:
                  isDark
                    ? "#cbd5e1"
                    : "#475569",
              }}
              onClick={() => {
                setEditingDepartment(
                  record
                );

                setOpenModal(true);

                form.setFieldsValue({
                  tenPhongBan:
                    record.tenPhongBan,

                  maPhongBan:
                    record.maPhongBan,

                  truongPhong:
                    record.truongPhong,
                });
              }}
            />
          </Tooltip>

          {/* DELETE */}

          <Tooltip title="Xóa">
            <Button
              danger
              type="text"
              icon={
                <DeleteOutlined />
              }
            />
          </Tooltip>

          {/* MORE */}

          <Tooltip title="Khác">
            <Button
              type="text"
              icon={<MoreOutlined />}
              style={{
                color:
                  isDark
                    ? "#cbd5e1"
                    : "#475569",
              }}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgContainer:
            cardColor,

          colorText:
            textColor,

          borderRadius: 16,
        },
      }}
    >
      <div
        style={{
          background: bgColor,

          minHeight: "100vh",

          padding: 28,
        }}
      >
        {/* HEADER */}

        <Card
          style={{
            ...glassCard,

            marginBottom: 24,
          }}
          bodyStyle={{
            padding: "34px 36px",
          }}
        >
          <Row
            justify="space-between"
            align="middle"
            gutter={[20, 20]}
          >
            <Col>
              <Space
                direction="vertical"
                size={6}
              >
                <Title
                  level={2}
                  style={{
                    margin: 0,

                    color:
                      textColor,
                  }}
                >
                  Quản lý phòng ban
                </Title>

                <Text
                  style={{
                    color: subText,

                    fontSize: 15,
                  }}
                >
                  Cấu hình và quản
                  lý thông tin phòng
                  ban doanh nghiệp
                </Text>
              </Space>
            </Col>

            <Col>
              <Button
                type="primary"
                icon={<PlusOutlined />}
                size="large"
                onClick={() => {
                  setEditingDepartment(
                    null
                  );

                  form.resetFields();

                  setOpenModal(true);
                }}
                style={{
                  height: 48,

                  borderRadius: 14,

                  paddingInline: 22,

                  fontWeight: 600,
                }}
              >
                Thêm phòng ban
              </Button>
            </Col>
          </Row>
        </Card>

        {/* TABLE */}

        <Card
          style={glassCard}
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
                <Space
                  size={14}
                  wrap
                >
                  <Input
                    prefix={
                      <SearchOutlined />
                    }
                    placeholder="Tìm kiếm phòng ban..."
                    value={search}
                    onChange={(e) =>
                      setSearch(
                        e.target.value
                      )
                    }
                    style={{
                      width: 320,

                      height: 46,

                      borderRadius: 14,
                    }}
                  />

                  <Select
                    placeholder="Trạng thái"
                    style={{
                      width: 180,

                      height: 46,
                    }}
                    options={[
                      {
                        label:
                          "Hoạt động",

                        value: 1,
                      },

                      {
                        label:
                          "Tạm khóa",

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
                  phòng ban
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
              rowKey="key"
            />
          </Space>
        </Card>

        {/* ================= MODAL ================= */}

        {/* ================= MODAL ================= */}

<Modal
closeIcon={false}
  open={openModal}
  maskClosable={false}
  onCancel={() => {
    setOpenModal(false);

    form.resetFields();
  }}
  footer={null}
  centered
  width={920}
  destroyOnClose
  zIndex={2000}
  styles={{
    mask: {
      backdropFilter: "blur(10px)",

      background: isDark
        ? "rgba(2,6,23,0.72)"
        : "rgba(15,23,42,0.35)",
    },

    root: {
      padding: 0,

      overflow: "hidden",

      borderRadius: 30,

      background: "transparent",

      boxShadow: isDark
        ? "0 25px 80px rgba(0,0,0,0.55)"
        : "0 25px 80px rgba(15,23,42,0.18)",
    },

    body: {
      padding: 0,

      borderRadius: 30,

      overflow: "hidden",

      background: isDark
        ? "#0f172a"
        : "#ffffff",
    },
  }}
>
  {/* TOP */}

  <div
    style={{
      background:
        "linear-gradient(135deg,#2563eb,#7c3aed)",

      padding: "30px 34px",

      color: "#fff",

      position: "relative",

      overflow: "hidden",
    }}
  >
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
    
                    color: "#fff",
    
                    width: 42,
    
                    height: 42,
    
                    borderRadius: 14,
    
                    background:
                      "rgba(255,255,255,0.08)",
    
                    border:
                      "1px solid rgba(255,255,255,0.12)",
    
                    backdropFilter:
                      "blur(10px)",
    
                    zIndex: 3,
                  }}
                />
    {/* DECOR */}

    <div
      style={{
        position: "absolute",

        right: -60,

        top: -60,

        width: 220,

        height: 220,

        borderRadius: "50%",

        background:
          "rgba(255,255,255,0.10)",
      }}
    />

    <Space
      direction="vertical"
      size={6}
    >
      <Title
        level={2}
        style={{
          margin: 0,

          color: "#fff",
        }}
      >
        {editingDepartment
          ? "Cập nhật phòng ban"
          : "Thêm phòng ban"}
      </Title>

      <Text
        style={{
          color:
            "rgba(255,255,255,0.82)",

          fontSize: 15,
        }}
      >
        Thiết lập thông tin và
        cấu hình phòng ban
      </Text>
    </Space>
  </div>

  {/* BODY */}

  <div
    style={{
      padding: 30,

      background: isDark
        ? "#0f172a"
        : "#ffffff",

      maxHeight: "78vh",

      overflowY: "auto",
    }}
  >
    <Form
      layout="vertical"
      form={form}
    >
      {/* INFO */}

      <Card
        style={{
          marginBottom: 22,

          borderRadius: 24,

          background: isDark
            ? "#111827"
            : "#f8fafc",

          border: `1px solid ${borderColor}`,
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

                color: textColor,
              }}
            >
              Thông tin phòng ban
            </Title>

            <Text
              style={{
                color: subText,
              }}
            >
              Thiết lập dữ liệu cơ
              bản cho phòng ban
            </Text>
          </div>

          <Row gutter={[22, 22]}>
            <Col
              xs={24}
              md={12}
            >
              <Form.Item
                label="Tên phòng ban"
                name="tenPhongBan"
              >
                <Input
                  size="large"
                  placeholder="Nhập tên phòng ban"
                  style={{
                    height: 52,

                    borderRadius: 16,
                  }}
                />
              </Form.Item>
            </Col>

            <Col
              xs={24}
              md={12}
            >
              <Form.Item
                label="Mã phòng ban"
                name="maPhongBan"
              >
                <Input
                  size="large"
                  placeholder="Ví dụ: PB001"
                  style={{
                    height: 52,

                    borderRadius: 16,
                  }}
                />
              </Form.Item>
            </Col>

            <Col
              xs={24}
              md={12}
            >
              <Form.Item
                label="Trưởng phòng"
                name="truongPhong"
              >
                <Select
                  size="large"
                  placeholder="Chọn trưởng phòng"
                  style={{
                    height: 52,
                  }}
                  options={[
                    {
                      label:
                        "Nguyễn Văn A",

                      value:
                        "Nguyễn Văn A",
                    },

                    {
                      label:
                        "Trần Thị B",

                      value:
                        "Trần Thị B",
                    },

                    {
                      label:
                        "Lê Văn C",

                      value:
                        "Lê Văn C",
                    },
                  ]}
                />
              </Form.Item>
            </Col>

            <Col
              xs={24}
              md={12}
            >
              <Form.Item
                label="Ngày thành lập"
                name="ngayThanhLap"
              >
                <DatePicker
                  size="large"
                  style={{
                    width: "100%",

                    height: 52,

                    borderRadius: 16,
                  }}
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                label="Mô tả"
                name="moTa"
              >
                <Input.TextArea
                  rows={5}
                  placeholder="Nhập mô tả phòng ban..."
                  style={{
                    borderRadius: 16,

                    resize: "none",
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
        </Space>
      </Card>

      {/* SETTINGS */}

      <Card
        style={{
          borderRadius: 24,

          background: isDark
            ? "#111827"
            : "#f8fafc",

          border: `1px solid ${borderColor}`,
        }}
      >
        <Space
          direction="vertical"
          size={20}
          style={{
            width: "100%",
          }}
        >
          <div>
            <Title
              level={4}
              style={{
                marginBottom: 4,

                color: textColor,
              }}
            >
              Thiết lập phòng ban
            </Title>

            <Text
              style={{
                color: subText,
              }}
            >
              Cấu hình hệ thống
            </Text>
          </div>

          {[
            "Cho phép tăng ca",

            "Áp dụng KPI",

            "Cho phép nghỉ phép tự động",

            "Cho phép quản lý duyệt lương",
          ].map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",

                justifyContent:
                  "space-between",

                alignItems: "center",

                padding:
                  "18px 20px",

                borderRadius: 18,

                background: isDark
                  ? "#0b1220"
                  : "#ffffff",

                border: `1px solid ${borderColor}`,
              }}
            >
              <Text
                style={{
                  color: textColor,

                  fontWeight: 500,

                  fontSize: 15,
                }}
              >
                {item}
              </Text>

              <Switch defaultChecked />
            </div>
          ))}
        </Space>
      </Card>

      {/* ACTION */}

      <Row
        justify="end"
        style={{
          marginTop: 30,
        }}
      >
        <Space size={14}>
          <Button
            size="large"
            onClick={() => {
              setOpenModal(false);

              form.resetFields();
            }}
            style={{
              height: 50,

              borderRadius: 14,

              paddingInline: 26,
            }}
          >
            Hủy
          </Button>

          <Button
            type="primary"
            size="large"
            style={{
              height: 50,

              borderRadius: 14,

              paddingInline: 26,

              fontWeight: 600,
            }}
          >
            {editingDepartment
              ? "Cập nhật phòng ban"
              : "Lưu phòng ban"}
          </Button>
        </Space>
      </Row>
    </Form>
  </div>
</Modal>
      </div>
    </ConfigProvider>
  );
};

export default QuanLyPhongBan;