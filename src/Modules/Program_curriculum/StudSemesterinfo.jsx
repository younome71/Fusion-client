import React, { useState } from "react";
import { Container, Button, Table, Flex, Text, Group } from "@mantine/core";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function StudSemesterInfo({ curriculum }) {
  const [activeTab, setActiveTab] = useState(0);

  const sampleSemester = {
    semester_no: 1,
    is_instigated: false,
    start_date: null,
    end_date: null,
    info: null,
  };

  const courseSlots = [
    {
      id: "NS1",
      slotName: "NS1",
      courseType: "Natural Science",
      courses: [
        {
          courseCode: "NS101",
          courseName: "Mathematics-I",
          credits: 4,
        },
        {
          courseCode: "NS102",
          courseName: "Physics-I",
          credits: 3,
        },
        {
          courseCode: "NS102",
          courseName: "Physics-I",
          credits: 3,
        },
        {
          courseCode: "NS102",
          courseName: "Physics-I",
          credits: 3,
        },
        {
          courseCode: "NS102",
          courseName: "Physics-I",
          credits: 3,
        },
        // add more courses as needed
      ],
    },
    {
      id: "NS2",
      slotName: "NS2",
      courseType: "Engineering",
      courses: [
        {
          courseCode: "ENG101",
          courseName: "Mechanics",
          credits: 4,
        },
        // add more courses here as needed
      ],
    },
    {
      id: "NS2",
      slotName: "NS2",
      courseType: "Engineering",
      courses: [
        {
          courseCode: "ENG101",
          courseName: "Mechanics",
          credits: 4,
        },
        // add more courses here as needed
      ],
    },
    {
      id: "NS2",
      slotName: "NS2",
      courseType: "Engineering",
      courses: [
        {
          courseCode: "ENG101",
          courseName: "Mechanics",
          credits: 4,
        },
        // add more courses here as needed
      ],
    },
  ];

  const renderCourseTables = (data) =>
    data.map((slot) => (
      <Table
        key={slot.id}
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          border: "1px solid #d3d3d3",
          marginBottom: "20px", // add spacing between table
          width: "100%", // full width for the table
        }}
      >
        <thead>
          <tr>
            <th
              colSpan="4"
              style={{
                padding: "15px 20px",
                backgroundColor: "#F9F9F9",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "1.25rem",
                borderBottom: "1px solid #d3d3d3",
              }}
            >
              {slot.slotName || "NS1"}
            </th>
          </tr>
          <tr>
            <th
              colSpan="4"
              style={{
                padding: "15px 20px",
                backgroundColor: "#F9F9F9",
                textAlign: "center",
                fontWeight: "bold",
                borderBottom: "1px solid #d3d3d3",
              }}
            >
              Type : {slot.courseType || "Natural Science"}
            </th>
          </tr>
          <tr>
            <th
              style={{
                padding: "12px 20px",
                backgroundColor: "#C5E2F6",
                color: "#3498db",
                textAlign: "center",
                width: "20%", // fixed width for Course Code
              }}
            >
              Course Code
            </th>
            <th
              style={{
                padding: "12px 20px",
                backgroundColor: "#C5E2F6",
                color: "#3498db",
                textAlign: "center",
                width: "40%", // fixed width for Course Name
              }}
            >
              Course Name
            </th>
            <th
              style={{
                padding: "12px 20px",
                backgroundColor: "#C5E2F6",
                color: "#3498db",
                textAlign: "center",
                width: "20%", // fixed width for Credits
              }}
            >
              Credits
            </th>
           
          </tr>
        </thead>
        <tbody>
          {slot.courses.map((course) => (
            <tr key={`${slot.id}-${course.courseCode}`}>
              <td
                style={{
                  padding: "15px 20px",
                  textAlign: "center",
                  color: "#3498db",
                  backgroundColor: "#ffffff",
                  borderRight: "1px solid #d3d3d3",
                  borderBottom: "1px solid #d3d3d3",
                }}
              >
                <a
                  href={`/programme_curriculum/student_course/?course?=${course.courseCode}`}
                  style={{ textDecoration: "none" }}
                >
                  {course.courseCode}
                </a>
              </td>
              <td
                style={{
                  padding: "15px 20px",
                  textAlign: "left",
                  backgroundColor: "#ffffff",
                  borderRight: "1px solid #d3d3d3",
                  borderBottom: "1px solid #d3d3d3",
                }}
              >
                {course.courseName}
              </td>
              <td
                style={{
                  padding: "15px 20px",
                  textAlign: "center",
                  backgroundColor: "#ffffff",
                  borderRight: "1px solid #d3d3d3",
                  borderBottom: "1px solid #d3d3d3",
                }}
              >
                {course.credits}
              </td>
            
            </tr>
          ))}
        
        </tbody>
      </Table>
    ));

  return (
    <Container
      style={{ padding: "20px", minHeight: "100vh", maxWidth: "100%" }}
    >
      {/* Breadcrumb Section */}
      {/* <Flex justify="flex-start" align="center" mb={20}>
        <Text size="md" weight={500} style={{ color: "#2C3E50" }}>
          Program and Curriculum &gt; Curriculums &gt; CSE UG Curriculum
        </Text>
      </Flex> */}

      {/* Tabs for Semester Info and Course Slots */}
      <Flex mb={20}>
        <Button
          variant={activeTab === 0 ? "filled" : "outline"}
          onClick={() => setActiveTab(0)}
          style={{ marginRight: "10px" }}
        >
          Semester {sampleSemester.semester_no} Info
        </Button>
        <Button
          variant={activeTab === 1 ? "filled" : "outline"}
          onClick={() => setActiveTab(1)}
        >
          Semester {sampleSemester.semester_no} Course Slots
        </Button>
      </Flex>

      {/* Conditional Rendering for Semester Info Tab */}
      {activeTab === 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          {/* Left side: Semester Information Table */}
          <div>
            <Table
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                border: "1px solid #d3d3d3",
                width: "65vw",
              }}
            >
              <tbody>
                {/* First row: Curriculum */}
                <tr>
                  <td
                    colSpan="2"
                    style={{
                      padding: "15px 20px",
                      backgroundColor: "#ffffff",
                      textAlign: "center",
                      fontWeight: "bold",
                      borderBottom: "1px solid #d3d3d3",
                    }}
                  >
                    {curriculum || "CSE UG Curriculum v1.0"}
                  </td>
                </tr>

                {/* Second row: Semester */}
                <tr>
                  <td
                    colSpan="2"
                    style={{
                      padding: "15px 20px",
                      backgroundColor: "#ffffff",
                      textAlign: "center",
                      fontWeight: "bold",
                      borderBottom: "1px solid #d3d3d3",
                    }}
                  >
                    Semester : {sampleSemester.semester_no}
                  </td>
                </tr>

                {/* Third row: Instigate Semester */}
                <tr>
                  <td
                    style={{
                      padding: "15px 20px",
                      backgroundColor: "#C5E2F6",
                      color: "#3498db",
                      fontWeight: "bold",
                      textAlign: "center",
                      borderRight: "1px solid #d3d3d3",
                    }}
                  >
                    Instigate Semester
                  </td>
                  <td
                    style={{
                      padding: "15px 20px",
                      backgroundColor: "#C5E2F6",
                      color: sampleSemester.is_instigated ? "green" : "red",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {sampleSemester.is_instigated ? "Active" : "Not Yet"}
                  </td>
                </tr>

                {/* Fourth row: Start Semester Date */}
                <tr>
                  <td
                    style={{
                      padding: "15px 20px",
                      backgroundColor: "#ffffff",
                      color: "#3498db",
                      fontWeight: "bold",
                      textAlign: "center",
                      borderRight: "1px solid #d3d3d3",
                    }}
                  >
                    Start Semester Date
                  </td>
                  <td
                    style={{
                      padding: "15px 20px",
                      backgroundColor: "#ffffff",
                      textAlign: "center",
                    }}
                  >
                    {sampleSemester.start_date || "None"}
                  </td>
                </tr>

                {/* Fifth row: End Semester Date */}
                <tr>
                  <td
                    style={{
                      padding: "15px 20px",
                      backgroundColor: "#C5E2F6",
                      color: "#3498db",
                      fontWeight: "bold",
                      textAlign: "center",
                      borderRight: "1px solid #d3d3d3",
                    }}
                  >
                    End Semester Date
                  </td>
                  <td
                    style={{
                      padding: "15px 20px",
                      backgroundColor: "#C5E2F6",
                      textAlign: "center",
                    }}
                  >
                    {sampleSemester.end_date || "None"}
                  </td>
                </tr>

                {/* Sixth row: Semester Information */}
                <tr>
                  <td
                    style={{
                      padding: "15px 20px",
                      backgroundColor: "#ffffff",
                      color: "#3498db",
                      fontWeight: "bold",
                      textAlign: "center",
                      borderRight: "1px solid #d3d3d3",
                    }}
                  >
                    Semester Information
                  </td>
                  <td
                    style={{
                      padding: "15px 20px",
                      backgroundColor: "#ffffff",
                      textAlign: "center",
                    }}
                  >
                    {sampleSemester.info || "None"}
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>

          {/* Right side: Buttons */}
         
        </div>
      )}

      {/* Conditional Rendering for Course Slots Tab */}
      {activeTab === 1 && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div style={{ width: "65vw" }}>{renderCourseTables(courseSlots)}</div>

          
        </div>
      )}
    </Container>
  );
}

StudSemesterInfo.propTypes = {
  curriculum: PropTypes.string,
};
