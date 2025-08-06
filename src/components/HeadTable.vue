<template>
  <div class="py-[20px] flex flex-wrap justify-between items-center">
    <div>
      <h2 class="text-[#14151A] text-[32px] font-[500] leading-[40px]">Projects</h2>
    </div>
    <div class="flex items-center gap-3">
      <h3 class="me-2">
        <span class="text-[#14151A] text-[14px] font-[600] leading-[20px]"> Sort: </span>
        <select
          class="text-[#595B69] text-[14px] font-[600] leading-[20px] border-e-2 border-0 focus:outline-none focus:ring-0 focus:shadow-none border-[#D7DADE]"
          id="myDropdown"
          onchange="handleChange(this)"
        >
          <option value="1">Default</option>
          <option value="2">Special</option>
        </select>
      </h3>
      <button
        class="flex rounded-[6px] text-[white] my-btn text-[14px] bg-[#0165F8] py-[10px] px-[16px] justify-center items-center gap-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="16"
          viewBox="0 0 15 16"
          fill="none"
        >
          <path
            d="M7.5 4.25C7.33424 4.25 7.17527 4.31585 7.05806 4.43306C6.94085 4.55027 6.875 4.70924 6.875 4.875V7.375H4.375C4.20924 7.375 4.05027 7.44085 3.93306 7.55806C3.81585 7.67527 3.75 7.83424 3.75 8C3.75 8.16576 3.81585 8.32473 3.93306 8.44194C4.05027 8.55915 4.20924 8.625 4.375 8.625H6.875V11.125C6.875 11.2908 6.94085 11.4497 7.05806 11.5669C7.17527 11.6842 7.33424 11.75 7.5 11.75C7.66576 11.75 7.82473 11.6842 7.94194 11.5669C8.05915 11.4497 8.125 11.2908 8.125 11.125V8.625H10.625C10.7908 8.625 10.9497 8.55915 11.0669 8.44194C11.1842 8.32473 11.25 8.16576 11.25 8C11.25 7.83424 11.1842 7.67527 11.0669 7.55806C10.9497 7.44085 10.7908 7.375 10.625 7.375H8.125V4.875C8.125 4.70924 8.05915 4.55027 7.94194 4.43306C7.82473 4.31585 7.66576 4.25 7.5 4.25Z"
            fill="white"
          />
        </svg>
        <span> Create Project </span>
      </button>
    </div>
  </div>
</template>
<script setup>
function handleChange(selectElement) {
  const selectedValue = selectElement.value
}
</script>
<style scoped>
.my-btn {
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
}
</style>
